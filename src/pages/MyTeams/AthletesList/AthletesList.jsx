import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router-dom';
import { 
  AthletesContainer, 
  AthletesHeader, 
  FilterButton,
  FilterDropdown, 
  DropdownOption, 
  AthletesListContainer, 
  AthleteItem, 
  AthleteIconWrapper, 
  AthleteInfo, 
  AthleteName, 
  TeamName, 
  ChevronWrapper, 
  AddNewAthleteButton, 
  AddButtonWrapper,
  EmptyStateMessage,
  AthletesWrapper
} from './AthletesList.styled';

const AthletesList = () => {
  const { setTitle } = useOutletContext();
  const [filterType, setFilterType] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    setTitle("Спортсмени");
  }, [setTitle]);
  
  const athletes = [
    { id: 1, name: 'Олександр Іванов', team: 'Динамо' },
    { id: 2, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 3, name: 'Ігор Коваленко', team: '-' },
    { id: 4, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 5, name: 'Володимир Бондаренко', team: '-' },
    { id: 1, name: 'Олександр Іванов', team: 'Динамо' },
    { id: 2, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 3, name: 'Ігор Коваленко', team: '-' },
    { id: 4, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 5, name: 'Володимир Бондаренко', team: '-' },
  ];
  
  const filteredAthletes = athletes.filter(athlete => {
    if (filterType === 'all') return true;
    if (filterType === 'withTeam') return athlete.team && athlete.team !== '-';
    if (filterType === 'withoutTeam') return !athlete.team || athlete.team === '-';
    return true;
  });

  const handleFilterClick = (type) => {
    setFilterType(type);
    setIsDropdownOpen(false);
  };

  return (
    <AthletesWrapper>
      <AthletesContainer>
        <AthletesHeader>
          <h2>Спортсмени</h2>
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <FilterButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {filterType === 'all' && 'Усі'}
              {filterType === 'withTeam' && 'З командами'}
              {filterType === 'withoutTeam' && 'Без команди'}
            </FilterButton>
            {isDropdownOpen && (
              <FilterDropdown>
                <DropdownOption active={filterType === 'all'} onClick={() => handleFilterClick('all')}>
                  Усі
                </DropdownOption>
                <DropdownOption active={filterType === 'withTeam'} onClick={() => handleFilterClick('withTeam')}>
                  З командами
                </DropdownOption>
                <DropdownOption active={filterType === 'withoutTeam'} onClick={() => handleFilterClick('withoutTeam')}>
                  Без команди
                </DropdownOption>
              </FilterDropdown>
            )}
          </div>
        </AthletesHeader>

        <AthletesListContainer>
          {filteredAthletes.length > 0 ? (
            filteredAthletes.map(athlete => (
              <AthleteItem key={athlete.id} as={NavLink} to={`/athletes/${athlete.id}`}>
                <AthleteIconWrapper>
                  {/* Placeholder for user icon */}
                </AthleteIconWrapper>
                <AthleteInfo>
                  <AthleteName>{athlete.name}</AthleteName>
                  <TeamName>{athlete.team || '-'}</TeamName>
                </AthleteInfo>
                <ChevronWrapper>
                  {/* Placeholder for chevron icon */}
                </ChevronWrapper>
              </AthleteItem>
            ))
          ) : (
            <EmptyStateMessage>
              Спортсменів не знайдено
            </EmptyStateMessage>
          )}
        </AthletesListContainer>

        {/* Кнопка додавання спортсмена */}
        <AddButtonWrapper>
          <AddNewAthleteButton>
            Додати нового спортсмена
          </AddNewAthleteButton>
        </AddButtonWrapper>
      </AthletesContainer>
    </AthletesWrapper>
  );
};

export default AthletesList;
