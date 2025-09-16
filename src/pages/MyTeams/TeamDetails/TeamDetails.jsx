import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import teamPlaceholder from "../../../assets/PlaceholderTeam.jpg";
import AthletesList from './AthletesList';
import { 
  fetchTeamDetails, 
  updateTeam, 
  deleteTeam, 
  resetUpdateTeamStatus, 
  resetDeleteTeamStatus
} from '../../../redux/teams/teamsOperations';
import { updateTeamAthletes } from '../../../redux/athletes/athletesOperations';
import { resetUpdateTeamAthletesStatus } from '../../../redux/athletes/athletesSlice';
import {
  Container,
  Card,
  PhotoSection,
  PhotoWrapper,
  PhotoCircle,
  ProfileImage,
  PhotoUploadButton,
  HiddenInput,
  InputsContainer,
  InputGroup,
  Label,
  Input,
  CenteredPage,
  CenteredCard,
  ButtonWrapper,
  Button,
  CameraIcon,
  LoaderWrapper,
  TwoColumnLayout,
  FirstSection,
  SecondSection,
  DeleteConfirmModal,
  DeleteConfirmContent,
  DeleteConfirmTitle,
  DeleteConfirmText,
  DeleteConfirmActions,
  DeleteConfirmButton,
  DeleteCancelButton,
  PhotoActionButtonsContainer,
  DeleteButton,
  CancelButton,
  DeleteIcon,
  CancelIcon,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButtonContainer,
  ModalCancelButton,
  ModalDeleteButton
} from './TeamDetails.styled';
import Loader from '../../../components/Loader/Loader';
import TeamGallery from './TeamGallery';
import { useNavigationPrompt } from '../../../hooks/useNavigationPrompt';
import { NavigationPrompt } from '../../../components/NavigationPrompt/NavigationPrompt';
import imageNotFound from "../../../assets/ImageNotFound.png";

const DeleteLogoModal = ({ isOpen, onConfirm, onCancel, teamName }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onCancel();
    }
    if (e.key === 'Enter') {
      onConfirm();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <ModalOverlay 
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          Видалити логотип команди?
        </ModalTitle>
        
        <ModalText>
          Ви впевнені, що хочете видалити поточний логотип команди "{teamName}"?
        </ModalText>
        
        <ModalButtonContainer>
          <ModalDeleteButton onClick={onConfirm}>
            Видалити
          </ModalDeleteButton>
          
          <ModalCancelButton onClick={onCancel}>
            Скасувати
          </ModalCancelButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

const TeamDetails = () => {
  const { teamId } = useParams();
  const { setTitle } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deletingLogo, setDeletingLogo] = useState(false);

  const { 
    teamDetails, 
    fetchTeamDetailsStatus, 
    fetchTeamDetailsError,
    updateTeamStatus,
    updateTeamError,
    deleteTeamStatus,
    deleteTeamError
  } = useSelector((state) => state.teams);
  
  const {
    updateTeamAthletesStatus,
    updateTeamAthletesError
  } = useSelector((state) => state.athletes);
  
  const loading = fetchTeamDetailsStatus === 'loading';
  const updating = updateTeamStatus === 'loading';
  const deleting = deleteTeamStatus === 'loading';
  const updatingAthletes = updateTeamAthletesStatus === 'loading'; 
  
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteLogoModal, setShowDeleteLogoModal] = useState(false);
  const [pendingImageFile, setPendingImageFile] = useState(null);
  
  const [hasChanges, setHasChanges] = useState(false);

  const [showPrompt, confirmNavigation, cancelNavigation] = useNavigationPrompt(hasChanges);
  const [validationErrors, setValidationErrors] = useState({
    teamName: false,
    ageCategory: false
  });

  const [initialValues, setInitialValues] = useState({
    teamName: '',
    ageCategory: '',
    photoPreview: null
  });

  useEffect(() => {
    if (teamId) {
      dispatch(fetchTeamDetails(teamId));
    }
    
    return () => {
      if (photoPreview && photoPreview !== teamDetails?.logo) {
        URL.revokeObjectURL(photoPreview);
      }
      dispatch(resetUpdateTeamStatus());
      dispatch(resetUpdateTeamAthletesStatus());
    };
  }, [teamId, dispatch]);

  useEffect(() => {
  if (teamDetails) {
    setTitle(`Профіль команди ${teamDetails.name}`);
    const name = teamDetails.name || '';
    const category = teamDetails.ageCategory || '';
    const logo = teamDetails.logo || null;
    
    setTeamName(name);
    setAgeCategory(category);
    setPhotoPreview(logo);
    
    setInitialValues({
      teamName: name,
      ageCategory: category,
      photoPreview: logo
    });
    
    setHasChanges(false);
  }
}, [teamDetails, setTitle]);
  
  useEffect(() => {
    const nameChanged = teamName !== initialValues.teamName;
    const categoryChanged = ageCategory !== initialValues.ageCategory;
    const photoChanged = photo !== null || photoPreview !== initialValues.photoPreview;
    
    setHasChanges(nameChanged || categoryChanged || photoChanged);
  }, [teamName, ageCategory, photo, photoPreview, initialValues]);

  useEffect(() => {
  if (updateTeamStatus === 'succeeded') {
    toast.success('Дані команди успішно оновлено!');
    setPhoto(null);
    setPendingImageFile(null);
    setDeletingLogo(false); 
    dispatch(resetUpdateTeamStatus());
    
    if (teamDetails?.logo) {
      setInitialValues(prev => ({
        ...prev,
        photoPreview: teamDetails.logo
      }));
    }
    
    setHasChanges(false);
  }
  
  if (updateTeamStatus === 'failed' && updateTeamError) {
    toast.error(updateTeamError);
    setDeletingLogo(false); 
    dispatch(resetUpdateTeamStatus());
  }
}, [updateTeamStatus, updateTeamError, dispatch, teamId]);

  useEffect(() => {
    if (updateTeamAthletesStatus === 'succeeded') {
      toast.success('Спортсмени успішно оновлені!');
      dispatch(fetchTeamDetails(teamId));
      dispatch(resetUpdateTeamAthletesStatus());
    }
    
    if (updateTeamAthletesStatus === 'failed' && updateTeamAthletesError) {
      toast.error(updateTeamAthletesError);
      dispatch(resetUpdateTeamAthletesStatus());
    }
  }, [updateTeamAthletesStatus, updateTeamAthletesError, dispatch, teamId]);

  useEffect(() => {
    if (deleteTeamStatus === 'succeeded') {
      toast.success('Команду успішно видалено!');
      navigate('/teams');
      dispatch(resetDeleteTeamStatus());
    }
    
    if (deleteTeamStatus === 'failed' && deleteTeamError) {
      toast.error(deleteTeamError);
    }
  }, [deleteTeamStatus, deleteTeamError, navigate, dispatch]);

  useEffect(() => {
    if (fetchTeamDetailsStatus === 'failed' && fetchTeamDetailsError) {
      toast.error(fetchTeamDetailsError);
    }
  }, [fetchTeamDetailsStatus, fetchTeamDetailsError]);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; 
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const validateFile = (file) => {
    if (!file) return null;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast.error('Дозволені лише зображення (jpeg, jpg, png, webp)', {
        position: 'top-right',
        autoClose: 3000,
      });
      return null;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error('Розмір файлу не повинен перевищувати 5MB', {
        position: 'top-right',
        autoClose: 3000,
      });
      return null;
    }

    return file;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validatedFile = validateFile(file);
      if (!validatedFile) {
        e.target.value = ''; 
        return;
      }

      setPhoto(validatedFile);
      if (photoPreview && photoPreview !== teamDetails?.logo) {
        URL.revokeObjectURL(photoPreview);
      }
      const previewURL = URL.createObjectURL(validatedFile);
      setPhotoPreview(previewURL);
      setPendingImageFile(validatedFile);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const fileInput = document.getElementById('photo-upload');
      if (fileInput) {
        fileInput.click();
      }
    }
  };

  const handleDeleteKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (pendingImageFile) {
        handleCancelImageUpload();
      } else {
        setShowDeleteLogoModal(true);
      }
    }
  };

  const handleCancelImageUpload = () => {
    if (photoPreview && photoPreview !== teamDetails?.logo) {
      URL.revokeObjectURL(photoPreview);
    }
    
    setPhotoPreview(teamDetails?.logo || null);
    setPhoto(null);
    setPendingImageFile(null);
    
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) {
      fileInput.value = '';
    }
    
    const hasOtherChanges = 
      teamName !== initialValues.teamName ||
      ageCategory !== initialValues.ageCategory;
    
    setHasChanges(hasOtherChanges);
  };

 const handleDeleteLogo = async () => {
  try {
    if (!teamDetails?.logo) {
      toast.info('У команди немає логотипу для видалення');
      setShowDeleteLogoModal(false);
      return;
    }

    console.log('Початок видалення логотипу для команди:', teamId);
    
    setShowDeleteLogoModal(false);
    
    setDeletingLogo(true);
    
    const result = await dispatch(updateTeam({
      teamId,
      teamData: {
        name: teamName,
        ageCategory,
        deleteLogo: true
      }
    })).unwrap();
    
    setPhotoPreview(null);
    setPhoto(null);
    setPendingImageFile(null);
    
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) {
      fileInput.value = '';
    }
    
    setInitialValues(prev => ({
      ...prev,
      photoPreview: null
    }));
    
    dispatch(fetchTeamDetails(teamId));
    
  } catch (error) {
    console.error('Помилка при видаленні логотипу:', error);
    toast.error(error.message || 'Помилка при видаленні логотипу');
  } finally {
    setDeletingLogo(false); 
  }
};
  
  const handleAthletesChange = async ({ addedAthletes = [], removedAthletes = [] }) => {
    try {
      if (addedAthletes.length > 0) {
        await dispatch(updateTeamAthletes({
          teamId,
          operation: 'add',
          athleteIds: addedAthletes
        })).unwrap();
      }
      
      if (removedAthletes.length > 0) {
        await dispatch(updateTeamAthletes({
          teamId,
          operation: 'remove',
          athleteIds: removedAthletes
        })).unwrap();
      }
    } catch (error) {
      console.error('Error updating team athletes:', error);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const errors = {
      teamName: !teamName.trim(),
      ageCategory: !ageCategory.trim()
    };
    
    setValidationErrors(errors);
    
    dispatch(updateTeam({
      teamId,
      teamData: {
        name: teamName,
        ageCategory,
        photo
      }
    }));
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTeam(teamId));
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (fetchTeamDetailsStatus === 'failed') {
    return (
      <CenteredPage>
        <CenteredCard>
          <h2>Помилка завантаження</h2>
          <Button $hasChanges onClick={() => navigate('/teams')}>
            Повернутися до списку команд
          </Button>
        </CenteredCard>
      </CenteredPage>
    );
  }

  if (!teamDetails) {
    return (
      <CenteredPage>
        <CenteredCard>
          <h2>Команду не знайдено</h2>
          <Button $hasChanges onClick={() => navigate('/teams')}>
            Повернутися до списку команд
          </Button>
        </CenteredCard>
      </CenteredPage>
    );
  }

  const hasExistingLogo = teamDetails.logo && !pendingImageFile;
  const hasPendingLogo = pendingImageFile !== null;

  return (
    <>
    {(updating || deleting || updatingAthletes || deletingLogo) && (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )}
      
      {showDeleteConfirm && (
        <DeleteConfirmModal>
          <DeleteConfirmContent>
            <DeleteConfirmTitle>Підтвердження видалення</DeleteConfirmTitle>
            <DeleteConfirmText>
              Ви впевнені, що хочете видалити команду "{teamDetails.name}"?
            </DeleteConfirmText>
            <DeleteConfirmActions>
              <DeleteConfirmButton onClick={confirmDelete}>
                Видалити
              </DeleteConfirmButton>
              <DeleteCancelButton onClick={cancelDelete}>
                Скасувати
              </DeleteCancelButton>
            </DeleteConfirmActions>
          </DeleteConfirmContent>
        </DeleteConfirmModal>
      )}

      <DeleteLogoModal 
        isOpen={showDeleteLogoModal}
        onConfirm={handleDeleteLogo}
        onCancel={() => setShowDeleteLogoModal(false)}
        teamName={teamDetails.name}
      />

      <Container blurred={updating || deleting || updatingAthletes || deletingLogo}>
        <Card>
          <TwoColumnLayout>
            <FirstSection>
              <PhotoSection>
                <PhotoWrapper>
                  <PhotoCircle>
                    <ProfileImage 
                      src={photoPreview || teamPlaceholder} 
                      alt="Логотип команди" 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = imageNotFound; 
                      }}
                    />
                  </PhotoCircle>
                  
                  <PhotoUploadButton htmlFor="photo-upload" tabIndex={0} onKeyDown={handleKeyDown}>
                    <CameraIcon />
                  </PhotoUploadButton>
                  
                  {(hasExistingLogo || hasPendingLogo) && (
  <PhotoActionButtonsContainer>
    {hasExistingLogo && teamDetails?.logo && (
      <DeleteButton 
        type="button"
        tabIndex={0} 
        onKeyDown={handleDeleteKeyDown}
        onClick={() => setShowDeleteLogoModal(true)}
        title="Видалити логотип"
      >
        <DeleteIcon />
      </DeleteButton>
    )}
    
    {hasPendingLogo && (
      <CancelButton 
        type="button"
        tabIndex={0} 
        onKeyDown={handleDeleteKeyDown}
        onClick={handleCancelImageUpload}
        title="Скасувати завантаження"
      >
        <CancelIcon />
      </CancelButton>
    )}
  </PhotoActionButtonsContainer>
)}
                  
                  <HiddenInput
                    id="photo-upload"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileChange}
                  />
                </PhotoWrapper>
              </PhotoSection>
              
              <InputsContainer>
                <InputGroup>
                  <Label htmlFor="teamName">Назва команди *</Label>
                  <Input 
                    id="teamName"
                    type="text" 
                    placeholder="Введіть назву команди"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                      if (e.target.value.trim()) {
                        setValidationErrors(prev => ({ ...prev, teamName: false }));
                      }
                    }}
                    isError={validationErrors.teamName}
                  />
                </InputGroup>
                
                <InputGroup>
                  <Label htmlFor="ageCategory">Вікова категорія *</Label>
                  <Input 
                    id="ageCategory"
                    type="text" 
                    placeholder="Введіть вікову категорію"
                    value={ageCategory}
                    onChange={(e) => {
                      setAgeCategory(e.target.value);
                      if (e.target.value.trim()) {
                        setValidationErrors(prev => ({ ...prev, ageCategory: false }));
                      }
                    }}
                    isError={validationErrors.ageCategory}
                  />
                </InputGroup>
              </InputsContainer>
            </FirstSection>
            
            <SecondSection>
              <AthletesList 
                teamAthletes={teamDetails.athletes || []}
                teamId={teamId} 
                onAthletesChange={handleAthletesChange}
                onSelectionChange={setHasChanges} 
              />
            </SecondSection>
          </TwoColumnLayout>
          
          <TeamGallery
            teamId={teamId}
            onSelectionChange={setHasChanges}
          />
          
          <ButtonWrapper>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '500px' }}>
              <Button 
                type="button" 
                onClick={handleUpdate}
                disabled={updating || !hasChanges}
                $hasChanges={hasChanges}
              >
                {updating ? 'Збереження...' : 'Зберегти дані команди'}
              </Button>
              <Button 
                type="button" 
                onClick={handleDelete}
                disabled={deleting}
                $isDelete={true}
              >
                {deleting ? 'Видалення...' : 'Видалити команду'}
              </Button>
            </div>
          </ButtonWrapper>
        </Card>
      </Container>

      <NavigationPrompt 
        isOpen={showPrompt}
        onConfirm={confirmNavigation}
        onCancel={cancelNavigation}
      />
    </>
  );
};

export default TeamDetails;