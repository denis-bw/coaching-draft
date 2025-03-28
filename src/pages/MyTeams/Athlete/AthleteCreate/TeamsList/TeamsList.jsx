import React, { useRef, useEffect, useState, useCallback } from 'react';
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
  const [selectedTeam, setSelectedTeam] = useState(null);
  
  const teamsListRef = useRef(null);
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


  const handleTeamClick = useCallback((team) => {
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
  }, [selectedTeam]);

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
  }, []);
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