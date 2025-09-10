import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../../../../../redux/teams/teamsOperations';
import Loader from '../../../../../components/Loader/Loader';
import { 
  TeamsContainer, 
  TeamsHeader, 
  HeaderRow, 
  TeamsListContainer, 
  EmptyStateMessage,
  TeamsWrapper,
  TeamInfo,
  TeamName,
  ProfileImageTeams,
  TeamIconWrapper,
  TeamItemWrapper,
  TeamButton,
  LoaderContainer
} from './TeamsList.styled';
import PlaceholderTeam from "../../../../../assets/PlaceholderTeam.jpg";
import imageNotFound from "../../../../../assets/ImageNotFound.png"; 

const TeamsList = ({ onTeamSelect }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamImagesStatus, setTeamImagesStatus] = useState({});
  
  const teamsListRef = useRef(null);
  const buttonRefs = useRef({});
  const loadingRef = useRef(false);
  
  const dispatch = useDispatch();
  const { teams, isLoading, hasMore, currentPage } = useSelector(state => state.teams);

  useEffect(() => {
    dispatch(fetchTeams(1));
  }, [dispatch]);

  useEffect(() => {
    if (teams.length > 0) {
      const newStatus = { ...teamImagesStatus };
      
      teams.forEach(team => {
        if (team.logo && !newStatus[team.id]) {
         
          const img = new Image();
          img.src = team.logo;
          
          img.onload = () => {
            setTeamImagesStatus(prev => ({
              ...prev,
              [team.id]: { loaded: true, error: false }
            }));
          };
          
          img.onerror = () => {
            setTeamImagesStatus(prev => ({
              ...prev,
              [team.id]: { loaded: true, error: true }
            }));
            console.log(`Зображення для команди ${team.id} не знайдено.`);
          };
          
          newStatus[team.id] = { loaded: false, error: false };
        }
      });
      
      if (Object.keys(newStatus).length > 0) {
        setTeamImagesStatus(prev => ({ ...prev, ...newStatus }));
      }
    }
  }, [teams]);

  const handleTeamClick = useCallback((team) => {
    if (selectedTeam && selectedTeam.id === team.id) {
      setSelectedTeam(null);
      if (onTeamSelect) {
        onTeamSelect(null);
      }
      if (buttonRefs.current[team.id]) {
        buttonRefs.current[team.id].blur();
      }
    } else {
      setSelectedTeam(team);
      if (onTeamSelect) {
        onTeamSelect(team.id);
      }
    }
  }, [selectedTeam, onTeamSelect]);

const handleImageError = (teamId) => {
  setTeamImagesStatus(prev => ({
    ...prev,
    [teamId]: { loaded: true, error: true }
  }));
};

const getImageSource = (team) => {
  if (!team.logo) return PlaceholderTeam;
  
  const status = teamImagesStatus[team.id];
  if (status && status.error) return imageNotFound; 
  
  return team.logo;
};

  const handleScroll = useCallback(() => {
    if (loadingRef.current || !hasMore) return;

    if (teamsListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = teamsListRef.current;
      
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore && !isLoading) {
        loadingRef.current = true;
        dispatch(fetchTeams(currentPage)).finally(() => {
          loadingRef.current = false;
        });
      }
    }
  }, [dispatch, hasMore, isLoading, currentPage]);

  useEffect(() => {
    const list = teamsListRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => list.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (!teamsListRef.current) return;
    
    const options = {
      root: teamsListRef.current,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.target.classList) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    const teamElements = document.querySelectorAll('[id^="team-"]');
    teamElements.forEach(element => {
      observer.observe(element);
      element.classList.add('hidden');
    });
    
    return () => observer.disconnect();
  }, [teams]); 

  return (
    <TeamsWrapper>
      <TeamsContainer>
        <TeamsHeader>
          <HeaderRow>
            <h2>Команда спортсмена</h2>
          </HeaderRow>
        </TeamsHeader>

        <TeamsListContainer ref={teamsListRef}>
          {teams.length > 0 ? (
            teams.map(team => (
              <TeamItemWrapper 
                key={team.id} 
                className="team-item"
                id={`team-${team.id}`}
              >
                <TeamButton 
                  ref={el => buttonRefs.current[team.id] = el}
                  isSelected={selectedTeam && selectedTeam.id === team.id}
                  onClick={() => handleTeamClick(team)}
                  type="button"
                >
                  <TeamIconWrapper>
                    <ProfileImageTeams 
                      loading="lazy" 
                      src={getImageSource(team)} 
                      alt={`Логотип команди ${team.name}`}
                      onError={() => handleImageError(team.id)}
                    />
                  </TeamIconWrapper>
                  <TeamInfo>
                    <TeamName>{team.name}</TeamName>
                  </TeamInfo>
                </TeamButton>
              </TeamItemWrapper>
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
      </TeamsContainer>
    </TeamsWrapper>
  );
};

export default TeamsList;