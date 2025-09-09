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
  DeleteCancelButton
} from './TeamDetails.styled';
import Loader from '../../../components/Loader/Loader';
import TeamGallery from './TeamGallery';
import { useNavigationPrompt } from '../../../hooks/useNavigationPrompt';
import { NavigationPrompt } from '../../../components/NavigationPrompt/NavigationPrompt';


const TeamDetails = () => {
  const { teamId } = useParams();
  const { setTitle } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

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
      dispatch(resetUpdateTeamStatus());
      
      dispatch(fetchTeamDetails(teamId));
      
      setHasChanges(false);
    }
    
    if (updateTeamStatus === 'failed' && updateTeamError) {
      toast.error(updateTeamError);
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      if (photoPreview && photoPreview !== teamDetails?.logo) {
        URL.revokeObjectURL(photoPreview);
      }
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
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
    
    const isValid = !Object.values(errors).some(error => error);
    
    setValidationErrors(errors);
    
    if (!isValid) {
      toast.error("Будь ласка, заповніть всі обов'язкові поля", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    
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
      <Container>
        <Card style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ color: 'inherit' }}>Помилка завантаження</h2>
          <p style={{ color: 'inherit' }}>{fetchTeamDetailsError}</p>
          <Button onClick={() => navigate('/teams')}>
            Повернутися до списку команд
          </Button>
        </Card>
      </Container>
    );
  }

  if (!teamDetails) {
    return (
      <Container>
        <Card style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ color: 'inherit' }}>Команду не знайдено</h2>
          <Button onClick={() => navigate('/teams')}>
            Повернутися до списку команд
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <>
      {(updating || deleting || updatingAthletes) && (
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

      <Container blurred={updating || deleting || updatingAthletes}>
        <Card>
          <TwoColumnLayout>
            <FirstSection>
              <PhotoSection>
                <PhotoWrapper>
                  <PhotoCircle>
                    <ProfileImage 
                      src={photoPreview || teamPlaceholder} 
                      alt="Фото команди" 
                    />
                  </PhotoCircle>
                  <PhotoUploadButton htmlFor="photo-upload" tabIndex={0} onKeyDown={handleKeyDown}>
                    <CameraIcon />
                  </PhotoUploadButton>
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