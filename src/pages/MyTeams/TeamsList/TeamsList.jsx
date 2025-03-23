import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
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
} from './TeamsList.styled';
import TeamListItem from './TeamListItem';

const TeamsList = () => {
  const { setTitle } = useOutletContext();
  const [searchQuery, setSearchQuery] = useState('');
  const teamsListRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    setTitle("Команди");
  }, [setTitle]);
  

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
  
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    if (!observerRef.current) return;
    
    observerRef.current.disconnect();

    setTimeout(() => {
      const teamItems = document.querySelectorAll('[data-team-item]');
      teamItems.forEach(item => {
        observerRef.current.observe(item);
      });
    }, 0);
  }, [filteredTeams]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (teamsListRef.current) {
      teamsListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
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
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </SearchContainer>
          </HeaderRow>
        </TeamsHeader>

        <TeamsListContainer ref={teamsListRef}>
          {filteredTeams.length > 0 ? (
            filteredTeams.map(team => (
              <TeamListItem 
                key={team.id}
                team={team}
              />
            ))
          ) : (
            <EmptyStateMessage>
              Команд не знайдено
            </EmptyStateMessage>
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