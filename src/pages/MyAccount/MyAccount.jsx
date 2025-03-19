import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/auth/authOperations'; 
import { useOutletContext } from "react-router-dom";
import { useNavigationPrompt } from '../../hooks/useNavigationPrompt'; 
import { NavigationPrompt } from '../../components/NavigationPrompt/NavigationPrompt'; 
import { 
  Container, 
  Card, 
  PhotoContainer, 
  PhotoWrapper, 
  PhotoCircle, 
  ProfileImage, 
  PhotoUploadButton, 
  FormGroup,
  FormRow,
  Label, 
  Input, 
  HiddenInput,
  Button,
  ButtonWrapper,
  WrapperInput,
  CameraIcon,
} from "./MyAccount.styled";
import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";
import profilePlaceholder from "../../assets/PlaceholderProfileCoach.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
  const { setTitle } = useOutletContext();
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.username || "");
  const [location, setLocation] = useState(user.location || "");
  const [birthdate, setBirthdate] = useState(user.dateOfBirth || "");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.avatar || null);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  
  const [showPrompt, confirmNavigation, cancelNavigation] = useNavigationPrompt(hasUnsavedChanges);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; 
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  useEffect(() => {
    if (user.avatar) {
      const img = new Image();
      img.src = user.avatar;

      img.onload = () => {
        setPreviewImage(user.avatar);
      };
      img.onerror = () => {
        console.log("Зображення не знайдено.");
        setPreviewImage(null); 
      };
    }
  }, [user.avatar]);

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

const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) {
      fileInput.click(); // Клік по інпуту, щоб відкрити діалог вибору файлів
    }
  }
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const validatedFile = validateFile(file);
    if (!validatedFile) {
      e.target.value = ''; 
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    setHasUnsavedChanges(true);
  }
};

  useEffect(() => {
    setTitle("Мій акаунт");
  }, [setTitle]);

  useEffect(() => {
    const hasChanges = 
      username !== (user.username || "") ||
      location !== (user.location || "") ||
      birthdate !== (user.dateOfBirth || "");
    
    setHasUnsavedChanges(hasChanges);
  }, [username, location, birthdate, user]);

  useEffect(() => {

    return () => {
      if (previewImage && previewImage !== user.avatar) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage, user.avatar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "username") {
      setUsername(value);
      setIsUsernameValid(value.length >= 3);
    }
    if (name === "location") setLocation(value);
    if (name === "birthdate") setBirthdate(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();

    if (username !== user.username) updatedData.append("username", username || "");  
    if (location !== user.location) updatedData.append("location", location || "");  
    if (birthdate !== user.dateOfBirth) updatedData.append("dateOfBirth", birthdate || null);  

    const fileInput = document.getElementById("photo-upload");
    const file = fileInput.files[0];
    
    if (file) {
      const validatedFile = validateFile(file);
      if (!validatedFile) {
        return; 
      }
      updatedData.append("avatar", validatedFile);
    }

    if (updatedData.has("username") || updatedData.has("location") || updatedData.has("dateOfBirth") || updatedData.has("avatar")) {
      try {
        const result = await dispatch(updateUserProfile(updatedData)); 
        
        if (!result.error) {
          setHasUnsavedChanges(false);
          toast.success('Зміни успішно збережено!');
          
        
          if (fileInput) {
            fileInput.value = '';
          }
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        toast.error(`Помилка при збереженні даних`, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } else {
      toast.info('Немає змін для збереження.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  
  const handleImageError = (e) => {
    e.target.src = profilePlaceholder;
  };

  return (
    <>
      <NavigationPrompt 
        isOpen={showPrompt}
        onConfirm={confirmNavigation}
        onCancel={cancelNavigation}
      />
      <ToastContainer />
      <Container onSubmit={handleSubmit}>
        <Card>
          <PhotoContainer>
            <PhotoWrapper>
              <PhotoCircle>
                <ProfileImage 
                  src={previewImage || profilePlaceholder}
                  alt="Фото профілю"
                  loading="lazy"
                  onError={handleImageError}
                />
              </PhotoCircle>
              <PhotoUploadButton htmlFor="photo-upload"  tabIndex={0}  onKeyDown={handleKeyDown}>
                <CameraIcon />
              </PhotoUploadButton>
              <HiddenInput 
                id="photo-upload" 
                type="file" 
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleFileChange}
              />
            </PhotoWrapper>
          </PhotoContainer>

          <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="username">Ім'я користувача</Label>
                <Input 
                  id="username" 
                  name="username"
                  placeholder="Введіть ім'я користувача"
                  value={username} 
                  maxLength={25}
                  minLength={3}
                  onChange={handleChange} 
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  $isEmpty={!isFocused && username === ''} 
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="email">Електронна пошта</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={user.email || "email"} 
                  disabled 
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="birthdate">Дата народження</Label>
                <CustomDatePicker 
                  selectedDate={birthdate} 
                  onDateChange={setBirthdate} 
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="location">Локація</Label>
                <Input 
                  id="location" 
                  name="location"
                  placeholder="Введіть вашу локацію"
                  value={location}
                  maxLength={50}
                  onChange={handleChange}
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

          <ButtonWrapper>
            <Button type="submit"  disabled={isLoading || !isUsernameValid}>
              {isLoading ? 'Збереження...' : 'Зберегти зміни'}
            </Button>
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};

export default MyAccount;