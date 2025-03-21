import React, { useRef, useEffect, useState } from 'react';
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
  TeamButton
} from './TeamsList.styled';
import PlaceholderTeam from "../../../../../assets/PlaceholderTeam.jpg";

const TeamsList = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);
  
  const teamsListRef = useRef(null);
  const observerRef = useRef(null);
  const buttonRefs = useRef({});

  const teams = [
    { id: 1, name: 'Динамо' },
    { id: 2, name: 'Шахтар' },
    { id: 3, name: 'Зоря' },
    { id: 4, name: 'Металіст' },
    { id: 5, name: 'Верес' },
    { id: 6, name: 'Олександрія' },
    { id: 7, name: 'Чорноморець' },
    { id: 8, name: 'Карпати' },
    { id: 9, name: 'Дніпро' },
    { id: 10, name: 'Десна' },
  ];

  useEffect(() => {
    const initialVisibility = {};
    teams.forEach(team => {
      initialVisibility[`team-${team.id}`] = true; 
    });
    setVisibleItems(initialVisibility);
  }, []);

  useEffect(() => {
    if (!teamsListRef.current) return;
    
    const options = {
      root: teamsListRef.current,
      rootMargin: '0px',
      threshold: 0.1, 
    };
    
    const handleIntersection = (entries) => {
      setVisibleItems(prev => {
        const updatedVisibility = { ...prev };
        let hasChanges = false;
        
        entries.forEach(entry => {
          const id = entry.target.id;
          if (updatedVisibility[id] !== entry.isIntersecting) {
            updatedVisibility[id] = entry.isIntersecting;
            hasChanges = true;
          }
        });
        
        return hasChanges ? updatedVisibility : prev;
      });
    };
    
    observerRef.current = new IntersectionObserver(handleIntersection, options);
    
    const teamElements = document.querySelectorAll('[id^="team-"]');
    teamElements.forEach(element => {
      observerRef.current.observe(element);
    });
    
    return () => observerRef.current?.disconnect();
  }, []);

  const handleTeamClick = (team) => {
    if (selectedTeam && selectedTeam.id === team.id) {
      console.log('Team deselected:', team);
      setSelectedTeam(null);
      
      if (buttonRefs.current[team.id]) {
        buttonRefs.current[team.id].blur();
      }
    } else {
      console.log('Team selected:', team);
      setSelectedTeam(team);
    }
  };

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
                isVisible={visibleItems[`team-${team.id}`] !== false}
                id={`team-${team.id}`}
              >
                <TeamButton 
                  ref={el => buttonRefs.current[team.id] = el}
                  isVisible={visibleItems[`team-${team.id}`] !== false}
                  isSelected={selectedTeam && selectedTeam.id === team.id}
                  onClick={() => handleTeamClick(team)}
                  type="button"
                >
                  <TeamIconWrapper>
                    <ProfileImageTeams loading="lazy" src={PlaceholderTeam} />
                  </TeamIconWrapper>
                  <TeamInfo>
                    <TeamName>{team.name}</TeamName>
                  </TeamInfo>
                </TeamButton>
              </TeamItemWrapper>
            ))
          ) : (
            <EmptyStateMessage>
              Команд не знайдено
            </EmptyStateMessage>
          )}
        </TeamsListContainer>

      </TeamsContainer>
    </TeamsWrapper>
  );
};

export default TeamsList;