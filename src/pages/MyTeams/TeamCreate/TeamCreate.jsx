import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import teamPlaceholder from "../../../assets/PlaceholderTeam.jpg";
import AthletesList from './AthletesList'; 
import { createTeam, resetCreateTeamStatus } from '../../../redux/teams/teamsOperations';
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
  SecondSection
} from './TeamCreate.styled';
import Loader from '../../../components/Loader/Loader';

const TeamCreate = () => {
  const { setTitle } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { createTeamStatus, createTeamError } = useSelector((state) => state.teams);
  const loading = createTeamStatus === 'loading';
  
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [selectedAthletes, setSelectedAthletes] = useState([]);
  
  const [validationErrors, setValidationErrors] = useState({
    teamName: false,
    ageCategory: false
  });

  useEffect(() => {
    setTitle("Створення команди");
    
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
      dispatch(resetCreateTeamStatus());
    };
  }, [setTitle, dispatch, photoPreview]);

  useEffect(() => {
    if (createTeamStatus === 'succeeded') {
      toast.success('Команду успішно створено!');
      dispatch(resetCreateTeamStatus());
    }
    
    if (createTeamStatus === 'failed' && createTeamError) {
      toast.error(createTeamError);
    }
  }, [createTeamStatus, createTeamError, navigate, dispatch]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
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

  const handleAthletesSelect = (athleteIds) => {
    setSelectedAthletes(athleteIds);
  };

  const handleSubmit = (e) => {
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
    
    dispatch(createTeam({
      name: teamName,
      ageCategory,
      photo,
      athleteIds: selectedAthletes 
    }));
  };

  return (
    <>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <Container blurred={loading}>
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
                onAthletesSelect={handleAthletesSelect}
              /> 
            </SecondSection>
          </TwoColumnLayout>
          
          <ButtonWrapper>
            <Button 
              type="button" 
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Створення...' : 'Створити команду'}
            </Button>
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};

export default TeamCreate;