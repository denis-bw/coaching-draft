import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { CustomDatePicker } from "../../../../components/CustomDatePicker/CustomDatePicker";
import profilePlaceholder from "../../../../assets/PlaceholderProfile.png";
import CollapsibleSection from './CollapsibleSection/CollapsibleSection';
import InfoInput from './InfoInput';
import {
  Container,
  Card,
  ContentWrapper,
  PhotoSection,
  PhotoWrapper,
  PhotoCircle,
  ProfileImage,
  PhotoUploadButton,
  HiddenInput,
  InfoSection,
  InfoTitle,
  InputsContainer,
  InputGroup,
  Label,
  Input,
  ButtonWrapper,
  Button,
  CameraIcon,
  WrapperInput
} from './AthleteCreate.styled';

const AthleteCreate = () => {
  const { setTitle } = useOutletContext();
  const [isFocused, setIsFocused] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthdate, setBirthdate] = useState( "");

  useEffect(() => {
    setTitle("Створення нового спортсмена");
  }, [setTitle]);
  
  return (
    <>
    <Container>
      <Card>
        <ContentWrapper>
          {/* Photo section - left side */}
          <PhotoSection>
            <PhotoWrapper>
              <PhotoCircle>
                <ProfileImage 
                  src={profilePlaceholder}
                  alt="Фото спортсмена"
                />
              </PhotoCircle>
              <PhotoUploadButton htmlFor="photo-upload">
                <CameraIcon />
              </PhotoUploadButton>
              <HiddenInput 
                id="photo-upload" 
                type="file" 
                loading="lazy"
                accept="image/jpeg,image/jpg,image/png,image/webp"
              />
            </PhotoWrapper>
          </PhotoSection>
          
          <InfoSection>
            <InfoTitle>Особиста інформація</InfoTitle>
            <InputsContainer>
              <InputGroup>
                <Label htmlFor="firstName">Ім'я</Label>
                <Input 
                  id="firstName"
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="lastName">Прізвище</Label>
                <Input 
                  id="lastName"
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="patronymic">По батькові</Label>
                <Input 
                  id="patronymic"
                  type="text" 
                  value={patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                />
              </InputGroup>
            </InputsContainer>
          </InfoSection>
        </ContentWrapper>
          < InfoInput id={"sportType"} name={"sportType"} placeholder={"Введіть вид спорту"} labelText={"Вид спорту"} maxLength={30}/>
          <Label htmlFor="birthdate">Дата народження</Label>
                          < InfoInput id={"sportType"} name={"sportType"} placeholder={"Введіть вид спорту"} labelText={"Вид спорту"} maxLength={30}/>
          <Label htmlFor="birthdate">Дата народження</Label>
                    < InfoInput id={"sportType"} name={"sportType"} placeholder={"Введіть вид спорту"} labelText={"Вид спорту"} maxLength={30}/>
          <Label htmlFor="birthdate">Дата народження</Label>
                    < InfoInput id={"sportType"} name={"sportType"} placeholder={"Введіть вид спорту"} labelText={"Вид спорту"} maxLength={30}/>
          <Label htmlFor="birthdate">Дата народження</Label>
          <WrapperInput>
            <CustomDatePicker 
              selectedDate={birthdate} 
              onDateChange={setBirthdate} 
            />
          </WrapperInput>

          <CollapsibleSection title={'Test'}>
            Будь-який контент
            <p> Будь-який контент</p>
            <p> Будь-який контент</p>
            <p> Будь-який контент</p>
             <p> Будь-який контент</p>
            <p> Будь-який контент</p>
            <p> Будь-який контент</p>
          </CollapsibleSection>

          <ButtonWrapper>
            <Button type="submit">
              Створити
            </Button>
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};

export default AthleteCreate;