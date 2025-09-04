import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAthletes, searchTeamAthletes } from '../../../redux/athletes/athletesOperations';
import { resetAthletes, resetTeamAthletes } from '../../../redux/athletes/athletesSlice';
import Loader from '../../../components/Loader/Loader';
import styled from 'styled-components';
import profilePlaceholder from "../../../assets/PlaceholderProfile.png";
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus.svg";
import { ReactComponent as CloseIcon } from "../../../assets/CloseIcon.svg";

const AthletesList = ({ teamAthletes = [], onAthletesChange, teamId }) => {
  const dispatch = useDispatch();
  
  const {
    entities,
    list,
    loading: isLoading,
    hasMore,
    currentPage,
    isAllDataLoaded,
  } = useSelector(state => state.athletes);
  
  const {
    teamAthletes: {
      entities: teamEntities,
      list: teamList,
      loading: teamLoading,
      hasMore: teamHasMore,
      currentPage: teamCurrentPage,
      isAllDataLoaded: teamIsAllDataLoaded,
    }
  } = useSelector(state => state.athletes);
  
  const [activeTab, setActiveTab] = useState('remove');
  const [selectedAthletes, setSelectedAthletes] = useState(new Set());
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  
  const athletesListRef = useRef(null);
  const teamAthletesListRef = useRef(null);
  const initialLoadComplete = useRef(false);
  const loadingRef = useRef(false);
  const teamLoadingRef = useRef(false);

  useEffect(() => {
    setSelectedAthletes(new Set());
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'remove' && teamId) {
      dispatch(resetTeamAthletes());
      
      const timerId = setTimeout(() => {
        dispatch(searchTeamAthletes({ teamId, page: 1 }));
      }, 50);
      
      return () => clearTimeout(timerId);
    }
  }, [dispatch, activeTab, teamId]);

  useEffect(() => {
    if (activeTab === 'add') {
      dispatch(resetAthletes());
      
      const timerId = setTimeout(() => {
        initialLoadComplete.current = true;
        dispatch(fetchAthletes({ page: 1, filter: 'withoutTeam' }));
      }, 50);
      
      return () => clearTimeout(timerId);
    }
  }, [dispatch, activeTab]);

  const loadMoreData = useCallback(() => {
    if (activeTab !== 'add' || !hasMore || isLoading || loadingRef.current || isAllDataLoaded) return;
    
    loadingRef.current = true;
    dispatch(fetchAthletes({ page: currentPage, filter: 'withoutTeam' }))
      .finally(() => {
        loadingRef.current = false;
      });
  }, [dispatch, hasMore, isLoading, currentPage, isAllDataLoaded, activeTab]);

  const loadMoreTeamData = useCallback(() => {
    if (activeTab !== 'remove' || !teamHasMore || teamLoading || teamLoadingRef.current || teamIsAllDataLoaded || !teamId) return;
    
    teamLoadingRef.current = true;
    dispatch(searchTeamAthletes({ teamId, page: teamCurrentPage }))
      .finally(() => {
        teamLoadingRef.current = false;
      });
  }, [dispatch, teamHasMore, teamLoading, teamCurrentPage, teamIsAllDataLoaded, activeTab, teamId]);

  const handleScroll = useCallback(() => {
    if (activeTab === 'add') {
      if (isLoading || !hasMore || loadingRef.current || isAllDataLoaded) return;

      if (athletesListRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = athletesListRef.current;
        
        if (scrollTop + clientHeight >= scrollHeight - 20) {
          loadMoreData();
        }
      }
    } else if (activeTab === 'remove') {
      if (teamLoading || !teamHasMore || teamLoadingRef.current || teamIsAllDataLoaded) return;

      if (teamAthletesListRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = teamAthletesListRef.current;
        
        if (scrollTop + clientHeight >= scrollHeight - 20) {
          loadMoreTeamData();
        }
      }
    }
  }, [hasMore, isLoading, loadMoreData, teamHasMore, teamLoading, loadMoreTeamData, teamIsAllDataLoaded, activeTab]);

  useEffect(() => {
    const currentRef = activeTab === 'add' ? athletesListRef.current : teamAthletesListRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, activeTab]);

  const handleAthleteSelect = (athleteId) => {
    setSelectedAthletes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(athleteId)) {
        newSet.delete(athleteId);
      } else {
        newSet.add(athleteId);
      }
      return newSet;
    });
  };

  const handleConfirmAction = () => {
    if (selectedAthletes.size === 0) return;
    
    const athleteIds = Array.from(selectedAthletes);
    
    setPendingAction({
      type: activeTab,
      athleteIds,
      count: selectedAthletes.size
    });
    
    setShowConfirmModal(true);
  };

  const confirmAction = () => {
    if (!pendingAction) return;
    
    if (pendingAction.type === 'add') {
      onAthletesChange({ addedAthletes: pendingAction.athleteIds });
    } else if (pendingAction.type === 'remove') {
      onAthletesChange({ removedAthletes: pendingAction.athleteIds });
    }
    
    setShowConfirmModal(false);
    setPendingAction(null);
    setSelectedAthletes(new Set());
  };

  const cancelAction = () => {
    setShowConfirmModal(false);
    setPendingAction(null);
  };

  const handleCancelSelection = () => {
    setSelectedAthletes(new Set());
  };

  const teamAthletesFromState = teamList.map(id => {
    const athlete = teamEntities[id];
    if (!athlete) return null;
    
    return {
      id: athlete.id,
      name: `${athlete.lastName} ${athlete.firstName} ${athlete.patronymic || ''}`.trim(),
      photo: athlete.photo
    };
  }).filter(Boolean);

  const availableAthletes = activeTab === 'add' ? list.map(id => {
    const athlete = entities[id];
    if (!athlete) return null;
    
    return {
      id: athlete._id || athlete.id,
      name: `${athlete.lastName} ${athlete.firstName} ${athlete.patronymic || ''}`.trim(),
      photo: athlete.photo
    };
  }).filter(Boolean) : [];

  const athletesToDisplay = activeTab === 'remove' ? teamAthletesFromState : availableAthletes;
  const currentLoading = activeTab === 'remove' ? teamLoading : isLoading;

  const getSelectedAthletesNames = () => {
    return Array.from(selectedAthletes).map(athleteId => {
      const athlete = athletesToDisplay.find(a => a.id === athleteId);
      return athlete ? athlete.name : '';
    }).filter(Boolean);
  };

  return (
    <>
     {showConfirmModal && pendingAction && (
  <ModalOverlay>
    <ModalContent>
      <ModalHeader>
        Підтвердження дії
      </ModalHeader>
      <ModalBody>
        <ModalText>
          Ви впевнені, що хочете {pendingAction.type === 'add' ? 'додати до команди' : 'видалити з команди'} 
          {' '}{pendingAction.count} спортсмен{pendingAction.count > 1 ? 'ів' : 'а'}?
        </ModalText>
        
        <AthletesListItem>
          {getSelectedAthletesNames().map((name, index) => (
            <AthleteNameItem key={index}>• {name}</AthleteNameItem>
          ))}
        </AthletesListItem>
      </ModalBody>
      <ModalActions>
        <ConfirmButton 
          onClick={confirmAction}
          $actionType={pendingAction.type}
        >
          {pendingAction.type === 'add' ? 'Додати' : 'Видалити'}
        </ConfirmButton>
        <CancelButton onClick={cancelAction}>
          Скасувати
        </CancelButton>
      </ModalActions>
    </ModalContent>
  </ModalOverlay>
)}

      <AthletesContainer>
        <AthletesHeader>
          <TabsContainer>
            <TabButton 
              $isActive={activeTab === 'remove'}
              onClick={() => setActiveTab('remove')}
            >
              Видалити з команди
            </TabButton>
            <TabButton 
              $isActive={activeTab === 'add'}
              onClick={() => setActiveTab('add')}
            >
              Додати до команди
            </TabButton>
          </TabsContainer>
        </AthletesHeader>

        <AthletesListContainer>
          <AthletesScrollContainer 
            ref={activeTab === 'add' ? athletesListRef : teamAthletesListRef}
            $hasSelectedAthletes={selectedAthletes.size > 0}
          >
            {athletesToDisplay.length > 0 ? (
              athletesToDisplay.map(athlete => (
                <AthleteItemWrapper key={athlete.id} className="athlete-item">
                  <AthleteItemStyled
                    as="div"
                    onClick={() => handleAthleteSelect(athlete.id)}
                    $isSelected={selectedAthletes.has(athlete.id)}
                    $actionType={activeTab}
                  >
                    <AthleteIconWrapper>
                      <ProfileImageAthletes
                        loading="lazy"
                        src={athlete.photo || profilePlaceholder}
                        alt={athlete.name}
                      />
                    </AthleteIconWrapper>
                    <AthleteInfo>
                      <AthleteName $isSelected={selectedAthletes.has(athlete.id)}>
                        {athlete.name}
                      </AthleteName>
                    </AthleteInfo>
                    <ActionIconWrapper>
                      {selectedAthletes.has(athlete.id) ? (
                        <IconCircle $iconType="close">
                          <StyledCloseIcon
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAthleteSelect(athlete.id);
                            }}
                          />
                        </IconCircle>
                      ) : activeTab === 'add' ? (
                        <IconCircle $iconType="add">
                          <StyledPlusIcon />
                        </IconCircle>
                      ) : (
                        <IconCircle $iconType="remove">
                          <StyledMinusIcon />
                        </IconCircle>
                      )}
                    </ActionIconWrapper>
                  </AthleteItemStyled>
                </AthleteItemWrapper>
              ))
            ) : (
              <EmptyStateMessage>
                {activeTab === 'remove' && !currentLoading && 'В команді немає спортсменів'}
                {activeTab === 'add' && !currentLoading && 'Спортсменів без команди не знайдено'}
              </EmptyStateMessage>
            )}
            
            {currentLoading && (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            )}
          </AthletesScrollContainer>

          {selectedAthletes.size > 0 && (
            <ActionsPanel>
              <ActionsPanelContent>
                <SelectedCount>
                  Обрано: {selectedAthletes.size} спортсмен{selectedAthletes.size > 1 ? 'ів' : 'а'}
                </SelectedCount>
                <ActionButtons>
                  <ConfirmActionButton onClick={handleConfirmAction}>
                    {activeTab === 'add' ? 'Додати' : 'Видалити'}
                  </ConfirmActionButton>
                  <CancelActionButton onClick={handleCancelSelection}>
                    Скасувати
                  </CancelActionButton>
                </ActionButtons>
              </ActionsPanelContent>
            </ActionsPanel>
          )}
        </AthletesListContainer>
      </AthletesContainer>
    </>
  );
};

export default AthletesList;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 90%;
  margin: 20px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const ModalBody = styled.div`
  padding: 24px 20px;
`;

const ModalText = styled.p`
  color: ${({ theme }) => theme.textBlack};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  text-align: center;
`; 

const AthletesListItem = styled.div`
  background-color: ${({ theme }) => theme.disabledBG};
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  max-height: 120px; 
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.lightGreen};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.white};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.greenMain};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.darkGreen};
  }
`;

const AthleteNameItem = styled.div`
  color: ${({ theme }) => theme.textBlack};
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 20px 20px 20px;
`;

const ConfirmButton = styled.button`
  flex: 1;
  background-color: ${({ $actionType, theme }) => 
    $actionType === 'add' ? theme.greenMain : theme.red};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ $actionType, theme }) => 
      $actionType === 'add' ? theme.darkGreen : theme.redDark};
    transform: translateY(-1px);
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.textGray};
    transform: translateY(-1px);
  }
`;

const AthletesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.greenMain};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AthletesHeader = styled.div`
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-bottom: 1px solid ${({ theme }) => theme.greenMain};
`;

const TabsContainer = styled.div`
  display: flex;
  border-radius: 6px 10px 0 0;
  overflow: hidden;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({ $isActive, theme }) => 
    $isActive ? theme.greenMain : theme.ContainerBGColor};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.white : theme.textBlack};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.greenMain};
  }
  
  &:hover {
    background-color: ${({ $isActive, theme }) => 
      $isActive ? theme.darkGreen : theme.lightGreen};
    color: ${({ $isActive, theme }) => 
      $isActive ? theme.white : theme.white};
  }

  @media (max-width: 390px) { 
     font-size: 12px;
  }
`;

const AthletesListContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const AthletesScrollContainer = styled.div`
  height: 100%;
  max-height: ${({ $hasSelectedAthletes }) => $hasSelectedAthletes ? '218px' : '270px'};
  overflow-y: auto;
  padding: 0 12px 12px 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: max-height 0.2s ease-in-out;

  @media (max-width: 768px) {
    max-height: ${({ $hasSelectedAthletes }) => $hasSelectedAthletes ? '190px' : '270px'};
  }

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

const AthleteItemWrapper = styled.div`
  width: 100%;
`;

const AthleteItemStyled = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 24px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ theme, $isSelected, $actionType }) => {
    if ($isSelected) {
      return $actionType === 'add' ? theme.lightGreen : theme.red;
    }
    return theme.disabledBG;
  }};
  color: ${({ theme, $isSelected }) => 
    $isSelected ? theme.white : theme.textBlack};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme, $isSelected, $actionType }) => {
      if ($isSelected) {
        return $actionType === 'add' ? theme.greenMain : theme.redDark;
      }
      return theme.lightGreen;
    }};
    color: ${({ theme }) => theme.white};
  }
`;

const AthleteIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const ProfileImageAthletes = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AthleteInfo = styled.div`
  padding: 0 10px;
  overflow: hidden;
  min-width: 0;
`;

const AthleteName = styled.div`
  font-weight: ${({ $isSelected }) => $isSelected ? '600' : '500'};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

const IconCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $iconType, theme }) => {
    switch ($iconType) {
      case 'add':
        return theme.greenMain;
      case 'remove':
        return theme.red;
      case 'close':
        return theme.gray;
      default:
        return theme.gray;
    }
  }};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${({ $iconType, theme }) => {
      switch ($iconType) {
        case 'add':
          return theme.darkGreen;
        case 'remove':
          return theme.redDark;
        case 'close':
          return theme.textGray;
        default:
          return theme.textGray;
      }
    }};
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.white};
  stroke: ${({ theme }) => theme.white};
  stroke-width: 3px;
`;

const StyledMinusIcon = styled(MinusIcon)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.white};
  stroke: ${({ theme }) => theme.white};
  stroke-width: 1px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.white};
    stroke: ${({ theme }) => theme.white};
  stroke-width: 0.4px;
`;

const ActionsPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.lightGreen};
  border-top: 1px solid ${({ theme }) => theme.greenMain};
  padding: 8px 12px;
  z-index: 10;
  transform: translateY(100%);
  animation: slideUp 0.3s ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const ActionsPanelContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const SelectedCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textBlack};
  flex-shrink: 1; 
  min-width: 0; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;


const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ConfirmActionButton = styled.button`
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 8px 16px;
  }
`;

const CancelActionButton = styled.button`
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.textGray};
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 8px 16px;
  }
`;

const EmptyStateMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.textGray};
  font-size: 13px;
  text-align: center;
`;

const LoaderContainer = styled.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`;