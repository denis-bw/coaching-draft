import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  resetAthletes,
  setFilterType,
  filterLocalAthletes
} from '../../../redux/athletes/athletesSlice';
import { fetchAthletes, searchAthletes } from '../../../redux/athletes/athletesOperations';
import Loader from '../../../components/Loader/Loader';
import { 
  AthletesContainer, 
  AthletesHeader, 
  FilterButton,
  FilterDropdown, 
  DropdownOption, 
  AthletesListContainer, 
  AddNewAthleteButton, 
  AddButtonWrapper,
  EmptyStateMessage,
  AthletesWrapper,
  SearchContainer,
  SearchInput,
  HeaderRow, 
  CreateIcon,
  LoaderContainer
} from './AthletesList.styled';
import AthleteListItem from './AthleteListItem';

const AthletesList = () => {
  const { setTitle } = useOutletContext();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const {
    entities,
    fullEntities,
    list,
    loading: isLoading,
    hasMore,
    currentPage,
    searchQuery,
    isSearchMode,
    searchPage,
    currentFilter,
    isAllDataLoaded
  } = useSelector(state => state.athletes);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState(searchQuery);

  const athletesListRef = useRef(null);
  const dropdownRef = useRef(null);
  const observerRef = useRef(null);
  const loadingRef = useRef(false);
  const searchTimeout = useRef(null);
  const initialLoadDone = useRef(false);
  const loadMoreAttempts = useRef(0);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    setTitle("Спортсмени");
  }, [setTitle]);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname;
      initialLoadDone.current = false;
      dispatch(resetAthletes());
      
      loadMoreAttempts.current = 0;
      
      dispatch(fetchAthletes({ page: 1, filter: currentFilter }));
    }
  }, [location.pathname, dispatch, currentFilter]);

  const loadMoreData = useCallback(() => {
    if (!hasMore || isLoading || loadingRef.current) return;
    
    loadingRef.current = true;
    
    const action = isSearchMode 
      ? searchAthletes({ name: searchQuery, page: searchPage, filter: currentFilter })
      : fetchAthletes({ page: currentPage, filter: currentFilter });
      
    dispatch(action).finally(() => {
      loadingRef.current = false;
    });
  }, [dispatch, hasMore, isLoading, currentPage, searchQuery, isSearchMode, searchPage, currentFilter]);

  useEffect(() => {
    if (!initialLoadDone.current) {
      initialLoadDone.current = true;
      
      if (searchQuery) {
        dispatch(searchAthletes({ name: searchQuery, page: 1, filter: currentFilter }));
      } else {
        dispatch(fetchAthletes({ page: 1, filter: currentFilter }));
      }
    }
  }, [dispatch, searchQuery, currentFilter, list.length, isLoading]);

  useEffect(() => {
    if (!hasMore || isLoading || loadingRef.current) return;
    
    const checkForScroll = () => {
      if (!athletesListRef.current) return;
      
      const containerHasScroll = athletesListRef.current.scrollHeight > athletesListRef.current.clientHeight;
      
      if (!containerHasScroll && hasMore && !isLoading && loadMoreAttempts.current < 10) {
        loadMoreAttempts.current++;
        loadMoreData();
      } else if (containerHasScroll || !hasMore || loadMoreAttempts.current >= 10) {
        loadMoreAttempts.current = 0;
      }
    };

    const timeoutId = setTimeout(checkForScroll, 200);
    return () => clearTimeout(timeoutId);
  }, [list, isLoading, hasMore, loadMoreData]);

  useEffect(() => {
    if (!athletesListRef.current) return;
    
    const options = {
      root: athletesListRef.current,
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
      const athleteItems = document.querySelectorAll('[id^="athlete-"]');
      athleteItems.forEach(item => {
        observerRef.current.observe(item);
      });
    }, 0);
  }, [list]);

  const handleScroll = useCallback(() => {
    if (loadingRef.current || !hasMore || isLoading) {
      return;
    }

    if (athletesListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = athletesListRef.current;
      
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
        loadMoreData();
      }
    }
  }, [hasMore, isLoading, loadMoreData]);

  useEffect(() => {
    const list = athletesListRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => list.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    
    dispatch(setSearchQuery(value));
    
    if (athletesListRef.current) {
      athletesListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (value) {
      dispatch(searchAthletes({ name: value, page: 1, filter: currentFilter }));
    } else {
      dispatch(resetAthletes());
      dispatch(fetchAthletes({ page: 1, filter: currentFilter }));
    }
  };

  const handleFilterClick = (filter) => {
    dispatch(setFilterType(filter));
    setIsDropdownOpen(false);

    if (athletesListRef.current) {
      athletesListRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    dispatch(resetAthletes());
    
    if (searchQuery) {
      dispatch(searchAthletes({ name: searchQuery, page: 1, filter }));
    } else {
      dispatch(fetchAthletes({ page: 1, filter }));
    }
  };

  const athletesToDisplay = list.map(id => {
    const athlete = entities[id];
    if (!athlete) return null;
    
    return {
      id: athlete.id,
      name: `${athlete.lastName} ${athlete.firstName} ${athlete.patronymic || ''}`.trim(),
      photo: athlete.photo,
      teamName: athlete.teamName || '-'
    };
  }).filter(Boolean);

  return (
    <AthletesWrapper>
      <AthletesContainer>
        <AthletesHeader>
          <HeaderRow>
            <h2>Мої спортсмени</h2>
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <FilterButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {currentFilter === 'all' && 'Усі'}
                {currentFilter === 'withTeam' && 'З командами'}
                {currentFilter === 'withoutTeam' && 'Без команди'}
              </FilterButton>
              {isDropdownOpen && (
                <FilterDropdown>
                  <DropdownOption active={currentFilter === 'all'} onClick={() => handleFilterClick('all')}>
                    Усі
                  </DropdownOption>
                  <DropdownOption active={currentFilter === 'withTeam'} onClick={() => handleFilterClick('withTeam')}>
                    З командами
                  </DropdownOption>
                  <DropdownOption active={currentFilter === 'withoutTeam'} onClick={() => handleFilterClick('withoutTeam')}>
                    Без команди
                  </DropdownOption>
                </FilterDropdown>
              )}
            </div>
          </HeaderRow>
          <SearchContainer>
            <SearchInput 
              type="text" 
              placeholder="Пошук спортсменів..." 
              value={inputValue}
              onChange={handleInputChange}
            />
          </SearchContainer>
        </AthletesHeader>

        <AthletesListContainer ref={athletesListRef}>
          {athletesToDisplay.length > 0 ? (
            athletesToDisplay.map(athlete => (
              <AthleteListItem 
                key={athlete.id}
                athlete={athlete}
              />
            ))
          ) : !isLoading ? (
            <EmptyStateMessage>
              Спортсменів не знайдено
            </EmptyStateMessage>
          ) : null}
          
          {isLoading && (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          )}
        </AthletesListContainer>

        <AddButtonWrapper>
          <AddNewAthleteButton to={`/athletes/create`}>
            Додати нового спортсмена
            <CreateIcon />
          </AddNewAthleteButton>
        </AddButtonWrapper>
      </AthletesContainer>
    </AthletesWrapper>
  );
};

export default AthletesList;