import React, { useState, useRef, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
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
} from './AthletesList.styled';
import AthleteListItem  from './AthleteListItem';

const AthletesList = () => {
  const { setTitle } = useOutletContext();
  const [filterType, setFilterType] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState({});
  
  const dropdownRef = useRef(null);
  const athletesListRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    setTitle("Спортсмени");
  }, [setTitle]);
  
  const athletes = [
    { id: 1, name: 'Олександр ІвановАААААААААААААААААААААААААААААААААffffffffffffААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА', team: 'ДинамоФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФФ' },
    { id: 2, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 3, name: 'Ігор Коваленко', team: '-' },
    { id: 4, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 5, name: 'Володимир Бондаренко', team: '-' },
    { id: 6, name: 'Олександр Іванов', team: 'Динамо' },
    { id: 7, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 8, name: 'Ігор Коваленко', team: '-' },
    { id: 9, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 10, name: 'Володимир Бондаренко', team: '-' },
    { id: 17, name: 'Марія Петренко', team: 'Шахтар' },
    { id: 18, name: 'Ігор Коваленко', team: '-' },
    { id: 19, name: 'Анна Сидоренко', team: 'Зоря' },
    { id: 20, name: 'Володимир Бондаренко', team: '-' },
  ];
  

  const filteredAthletes = athletes.filter(athlete => {
   
    const matchesFilter = 
      filterType === 'all' ? true :
      filterType === 'withTeam' ? athlete.team && athlete.team !== '-' :
      filterType === 'withoutTeam' ? !athlete.team || athlete.team === '-' :
      true;

    const matchesSearch = 
      !searchQuery ? true :
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.team.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

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
  

  useEffect(() => {
    if (!athletesListRef.current) return;
    
    const options = {
      root: athletesListRef.current,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const handleIntersection = (entries) => {
      const updatedVisibility = {...visibleItems};
      
      entries.forEach(entry => {
        const id = entry.target.id;
        updatedVisibility[id] = entry.isIntersecting;
      });
      
      setVisibleItems(updatedVisibility);
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
 
    const athleteElements = document.querySelectorAll('[id^="athlete-"]');
    athleteElements.forEach(element => {
      observerRef.current.observe(element);
    });
  }, [filteredAthletes]);
  
  

  const handleFilterClick = (type) => {
    setFilterType(type);
    setIsDropdownOpen(false);

    if (athletesListRef.current) {
      athletesListRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    if (athletesListRef.current) {
      athletesListRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
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

        <AthletesListContainer ref={athletesListRef}>
          {filteredAthletes.length > 0 ? (
            filteredAthletes.map(athlete => (
              <AthleteListItem 
                key={athlete.id}
                athlete={athlete}
                isVisible={visibleItems[`athlete-${athlete.id}`]}
              />
            ))
          ) : (
            <EmptyStateMessage>
              Спортсменів не знайдено
            </EmptyStateMessage>
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