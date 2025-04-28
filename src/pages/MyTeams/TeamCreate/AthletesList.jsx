import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAthletes } from '../../../redux/athletes/athletesOperations';
import { resetAthletes } from '../../../redux/athletes/athletesSlice';
import Loader from '../../../components/Loader/Loader';
import styled from 'styled-components';
import { ReactComponent as OriginalRoadSignPointingRight } from '../../../assets/RoadSignPointingRight.svg';
import profilePlaceholder from "../../../assets/PlaceholderProfile.png";

const AthletesList = ({ onAthletesSelect }) => {
  const dispatch = useDispatch();
  
  const {
    entities,
    list,
    loading: isLoading,
    hasMore,
    currentPage,
    isAllDataLoaded,
  } = useSelector(state => state.athletes);
  
  const [selectedAthletes, setSelectedAthletes] = useState([]);
  const athletesListRef = useRef(null);
  const initialLoadComplete = useRef(false);
  const loadingRef = useRef(false);

  useEffect(() => {
    dispatch(resetAthletes());
    
    const timerId = setTimeout(() => {
      initialLoadComplete.current = true;
      dispatch(fetchAthletes({ page: 1, filter: 'withoutTeam' }));
    }, 50);
    
    return () => clearTimeout(timerId);
  }, [dispatch]);

  const loadMoreData = useCallback(() => {
    if (!hasMore || isLoading || loadingRef.current || isAllDataLoaded) return;
    
    loadingRef.current = true;
    dispatch(fetchAthletes({ page: currentPage, filter: 'withoutTeam' }))
      .finally(() => {
        loadingRef.current = false;
      });
  }, [dispatch, hasMore, isLoading, currentPage, isAllDataLoaded]);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore || loadingRef.current || isAllDataLoaded) return;

    if (athletesListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = athletesListRef.current;
      
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreData();
      }
    }
  }, [hasMore, isLoading, loadMoreData, isAllDataLoaded]);

  useEffect(() => {
    const list = athletesListRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => list.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (onAthletesSelect) {
      onAthletesSelect(selectedAthletes);
    }
  }, [selectedAthletes, onAthletesSelect]);

  const toggleAthleteSelection = (athleteId) => {
    setSelectedAthletes(prev => 
      prev.includes(athleteId) 
        ? prev.filter(id => id !== athleteId) 
        : [...prev, athleteId]
    );
  };

  const athletesToDisplay = list.map(id => {
    const athlete = entities[id];
    if (!athlete) return null;
    
    return {
      id: athlete._id || athlete.id,
      name: `${athlete.lastName} ${athlete.firstName} ${athlete.patronymic || ''}`.trim(),
      photo: athlete.photo,
      isSelected: selectedAthletes.includes(athlete._id || athlete.id)
    };
  }).filter(Boolean);

  return (
    <AthletesWrapper>
      <AthletesContainer>
        <AthletesHeader>
          <HeaderRow>
            <Title>Додайте в команду</Title>
            {selectedAthletes.length > 0 && (
              <SelectedIndicator>
                Обрано: {selectedAthletes.length}
              </SelectedIndicator>
            )}
          </HeaderRow>
        </AthletesHeader>

        <AthletesListContainer>
          <AthletesScrollContainer ref={athletesListRef}>
            {athletesToDisplay.length > 0 ? (
              athletesToDisplay.map(athlete => (
                <AthleteItemWrapper key={athlete.id} className="athlete-item" id={`athlete-${athlete.id}`}>
                  <AthleteItemStyled
                    to={`/athletes/${athlete.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAthleteSelection(athlete.id);
                    }}
                    $isSelected={athlete.isSelected}
                  >
                    <AthleteIconWrapper>
                      <ProfileImageAthletes
                        loading="lazy"
                        src={athlete.photo || profilePlaceholder}
                      />
                    </AthleteIconWrapper>
                    <AthleteInfo>
                      <AthleteName>{athlete.name}</AthleteName>
                    </AthleteInfo>
                    <ChevronWrapper>
                      <RoadSignPointingRightIcon />
                    </ChevronWrapper>
                  </AthleteItemStyled>
                </AthleteItemWrapper>
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
          </AthletesScrollContainer>
        </AthletesListContainer>
      </AthletesContainer>
    </AthletesWrapper>
  );
};

export default AthletesList;

const RoadSignPointingRightIcon = styled(OriginalRoadSignPointingRight)`
  width: 18px;
  height: 18px;
  fill: ${(p) => p.theme.iconColor};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: auto;
`;

const AthletesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
`;

const AthletesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AthletesHeader = styled.div`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  position: relative;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SelectedIndicator = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.greenMain};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`;

const AthletesListContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const AthletesScrollContainer = styled.div`
  height: 100%;
  max-height: 350px;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.disabledBG};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.greenMain};
    border-radius: 10px;
  }
`;

const AthleteIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  position: relative;
  overflow: hidden;
`;

const ProfileImageAthletes = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AthleteInfo = styled.div`
  padding: 0 10px;
  overflow: hidden;
`;

const AthleteName = styled.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChevronWrapper = styled.div`
  color: ${({ theme }) => theme.textGray};
  display: flex;
  justify-content: flex-end;
`;

const EmptyStateMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.textGray};
  font-size: 13px;
`;


export const LoaderContainer = styled.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`;

const AthleteItemWrapper = styled.div`
  width: 100%;
`;

const AthleteItemStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: 32px 1fr 18px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ $isSelected, theme }) => 
    $isSelected ? theme.greenMain : theme.lightGreen};
  color: ${({ $isSelected, theme }) => 
    $isSelected ? theme.white : theme.textBlack};
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $isSelected, theme }) => 
      $isSelected ? theme.greenMain : theme.greenMain + 'cc'};
    color: white;
    
    ${ChevronWrapper} {
      color: white;
    }
  }
`;