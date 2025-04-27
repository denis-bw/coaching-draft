import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, resetTeams, filterLocalTeams } from '../../../redux/teams/teamsSlice';
import { fetchTeams, searchTeams } from '../../../redux/teams/teamsOperations';
import Loader from '../../../components/Loader/Loader';
import { 
  TeamsContainer, 
  TeamsHeader, 
  HeaderRow, 
  TeamsListContainer, 
  AddNewTeamButton, 
  AddButtonWrapper,
  EmptyStateMessage,
  TeamsWrapper,
  SearchContainer,
  SearchInput,
  CreateIcon,
  LoaderContainer
} from './TeamsList.styled';
import TeamListItem from './TeamListItem';

const TeamsList = () => {
  const { setTitle } = useOutletContext();
  const dispatch = useDispatch();
  const { 
    teams, 
    isLoading, 
    hasMore, 
    currentPage, 
    searchQuery, 
    isSearchMode, 
    searchPage,
    allTeams,
    isAllDataLoaded
  } = useSelector(state => state.teams);
  
  const teamsListRef = useRef(null);
  const observerRef = useRef(null);
  const loadingRef = useRef(false);
  const searchTimeout = useRef(null);
  const initialLoadDone = useRef(false);
  const loadMoreAttempts = useRef(0);  
  const [inputValue, setInputValue] = useState(searchQuery);
  
  useEffect(() => {
    setTitle("Команди");
  }, [setTitle]);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);


  const loadMoreData = useCallback(() => {
    if (!hasMore || isLoading || loadingRef.current) return;
    
    loadingRef.current = true;
    
    const action = isSearchMode 
      ? searchTeams({ name: searchQuery, page: searchPage })
      : fetchTeams(currentPage);
      
    dispatch(action).finally(() => {
      loadingRef.current = false;
    });
  }, [dispatch, hasMore, isLoading, currentPage, searchQuery, isSearchMode, searchPage]);


  useEffect(() => {
    if (!initialLoadDone.current && !isLoading && teams.length === 0) {
      initialLoadDone.current = true;
      
      if (searchQuery) {
        dispatch(setSearchQuery(searchQuery));
        dispatch(searchTeams({ name: searchQuery, page: 1 }));
      } else {
        dispatch(fetchTeams(1));
      }
    }
  }, [dispatch, searchQuery, teams.length, isLoading]);


  useEffect(() => {
    if (!hasMore || isLoading || loadingRef.current) return;
    
    const checkForScroll = () => {
      if (!teamsListRef.current) return;
      
      const containerHasScroll = teamsListRef.current.scrollHeight > teamsListRef.current.clientHeight;

      if (!containerHasScroll && hasMore && !isLoading && loadMoreAttempts.current < 10) {
        console.log("Немає скролу, довантажуємо ще дані...", loadMoreAttempts.current);
        loadMoreAttempts.current++;
        loadMoreData();
      } else if (containerHasScroll || !hasMore || loadMoreAttempts.current >= 10) {

        loadMoreAttempts.current = 0;
      }
    };


    const timeoutId = setTimeout(checkForScroll, 200);
    return () => clearTimeout(timeoutId);
  }, [teams, isLoading, hasMore, loadMoreData]);

  useEffect(() => {
    if (!teamsListRef.current) return;
    
    const options = {
      root: teamsListRef.current,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
        } else {
          element.style.opacity = '0.6';
          element.style.transform = 'scale(0.9)';
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(handleIntersection, options);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (!observerRef.current) return;
    
    observerRef.current.disconnect();

    setTimeout(() => {
      const teamItems = document.querySelectorAll('[data-team-item]');
      teamItems.forEach(item => {
        observerRef.current.observe(item);
      });
    }, 0);
  }, [teams]);

  const handleScroll = useCallback(() => {
    if (loadingRef.current || !hasMore || isLoading) {
      return;
    }

    if (teamsListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = teamsListRef.current;
      
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
        loadMoreData();
      }
    }
  }, [hasMore, isLoading, loadMoreData]);

  useEffect(() => {
    const list = teamsListRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => list.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); 
    
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    
    searchTimeout.current = setTimeout(() => {
      performSearch(value);
    }, 500);
  };

  const performSearch = (value) => {

    loadMoreAttempts.current = 0;

    if (value && isAllDataLoaded) {

      dispatch(filterLocalTeams(value));
    } else {

      dispatch(setSearchQuery(value));
      
      if (teamsListRef.current) {
        teamsListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      if (value) {
        dispatch(searchTeams({ name: value, page: 1 }));
      } else if (!value) {
        dispatch(resetTeams());
        dispatch(fetchTeams(1));
      }
    }
  };

  return (
    <TeamsWrapper>
      <TeamsContainer>
        <TeamsHeader>
          <HeaderRow>
            <h2>Мої команди</h2>
            <SearchContainer>
              <SearchInput 
                type="text" 
                placeholder="Пошук команд..." 
                value={inputValue}
                onChange={handleInputChange}
              />
            </SearchContainer>
          </HeaderRow>
        </TeamsHeader>

        <TeamsListContainer ref={teamsListRef}>
          {teams.length > 0 ? (
            teams.map(team => (
              <TeamListItem 
                key={team.id}
                team={team}
                data-team-item
              />
            ))
          ) : !isLoading ? (
            <EmptyStateMessage>
              Команд не знайдено
            </EmptyStateMessage>
          ) : null}
          
          {isLoading && (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          )}
        </TeamsListContainer>

        <AddButtonWrapper>
          <AddNewTeamButton to={`/teams/create`}>
            Додати нову команду
            <CreateIcon />
          </AddNewTeamButton>
        </AddButtonWrapper>
      </TeamsContainer>
    </TeamsWrapper>
  );
};

export default TeamsList;