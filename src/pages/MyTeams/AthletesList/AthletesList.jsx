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
  AthletesWrapper,
  SearchContainer,
  SearchInput,
  HeaderRow, 
  RoadSignPointingRightIcon,
  ProfileImageAthletes,
  CreateIcon,
} from './AthletesList.styled';
import profilePlaceholder from "../../../assets/PlaceholderProfile.jpg";


const AthletesList = () => {
  const { setTitle } = useOutletContext();
  const [filterType, setFilterType] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    setTitle("Спортсмени");
  }, [setTitle]);
  
  const athletes = [
    { id: 1, name: 'Олександр ІвановAAAAAAAAAAAAAAAAAAAAAAAAAФАААААААААААААААААААААААААААААААААААААААААААААААААААААААAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', team: 'ДинамоAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' },
    { id: 2, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 3, name: 'Ігор Коваленко', team: '-' },
    { id: 4, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 5, name: 'Володимир Бондаренко', team: '-' },
    { id: 6, name: 'Олександр Іванов', team: 'Динамо' },
    { id: 7, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 8, name: 'Ігор Коваленко', team: '-' },
    { id: 9, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 10, name: 'Володимир Бондаренко', team: '-' },
  ];
  
  const filteredAthletes = athletes.filter(athlete => {
    // First apply filter type
    const matchesFilter = 
      filterType === 'all' ? true :
      filterType === 'withTeam' ? athlete.team && athlete.team !== '-' :
      filterType === 'withoutTeam' ? !athlete.team || athlete.team === '-' :
      true;
    
    // Then apply search query
    const matchesSearch = athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          athlete.team.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const handleFilterClick = (type) => {
    setFilterType(type);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AthletesWrapper>
      <AthletesContainer>
        <AthletesHeader>
          <HeaderRow>
            <h2>Мої спортсмени</h2>
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
          </HeaderRow>
          <SearchContainer>
            <SearchInput 
              type="text" 
              placeholder="Пошук спортсменів..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </AthletesHeader>

        <AthletesListContainer>
          {filteredAthletes.length > 0 ? (
            filteredAthletes.map(athlete => (
              <AthleteItem key={athlete.id} to={`/athletes/${athlete.id}`}>
                <AthleteIconWrapper>
                  <ProfileImageAthletes
                    src={profilePlaceholder}
                  />
                </AthleteIconWrapper>
                <AthleteInfo>
                  <AthleteName>{athlete.name}</AthleteName>
                  <TeamName>{athlete.team || '-'}</TeamName>
                </AthleteInfo>
                <ChevronWrapper>
                 <RoadSignPointingRightIcon/>
                </ChevronWrapper>
              </AthleteItem>
            ))
          ) : (
            <EmptyStateMessage>
              Спортсменів не знайдено
            </EmptyStateMessage>
          )}
        </AthletesListContainer>

        <AddButtonWrapper >
        <AddNewAthleteButton to={`/create-athletes`}>
          Додати нового спортсмена
          <CreateIcon />
        </AddNewAthleteButton>
      </AddButtonWrapper>

      </AthletesContainer>
    </AthletesWrapper>
  );
};

export default AthletesList;