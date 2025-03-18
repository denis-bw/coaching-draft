import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { CustomDatePicker } from "../../../../components/CustomDatePicker/CustomDatePicker";
import profilePlaceholder from "../../../../assets/PlaceholderProfile.png";
import CollapsibleSection from './CollapsibleSection/CollapsibleSection';
import CustomSelectComponent from './CustomSelectComponent';

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
  WrapperInput,
  TwoColumnLayout,
  FormBlock,
  ContactsBlock,
  ContactsTitle,
  BlockTitle,
  InputRows,
  InputRow,
  SelectWrapper,
  Select,
  ArrowIcon 
} from './AthleteCreate.styled';

const AthleteCreate = () => {
  const { setTitle } = useOutletContext();
  const [isFocused, setIsFocused] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfMeasurement, setDateOfMeasurement] = useState("");
  
  useEffect(() => {
    setTitle("Створення нового спортсмена");
  }, [setTitle]);
  
  return (
    <>
    <Container>
      <Card>
        <ContentWrapper>
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
                     placeholder="Введіть ім'я"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="lastName">Прізвище</Label>
                <Input 
                  id="lastName"
                  type="text" 
                  placeholder="Введіть прізвище"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="patronymic">По батькові</Label>
                <Input 
                  id="patronymic"
                  type="text" 
                  placeholder="Введіть по батькові"
                  value={patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                />
              </InputGroup>
            </InputsContainer>
          </InfoSection>
        </ContentWrapper>
        
        <TwoColumnLayout>
          <FormBlock>
            <InputRows >
              <InputRow>
                <InputGroup>
                  <Label htmlFor="birthdate">Дата народження</Label>
                  <WrapperInput>
                    <CustomDatePicker 
                      selectedDate={birthdate} 
                      onDateChange={setBirthdate} 
                    />
                  </WrapperInput>
                </InputGroup>
              </InputRow>
              
              <InputRow>
                <InputGroup>
                  <Label htmlFor="address">Адреса</Label>
                  <Input 
                    id="address"
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Введіть адресу"
                  />
                </InputGroup>
              </InputRow>
              
              <InputRow>
                <CustomSelectComponent 
                  label="Виберіть стать"  
                  value={gender}        
                  onChange={setGender}  
                />
              </InputRow>
            </InputRows>
          </FormBlock>
          
          <ContactsBlock>
            <ContactsTitle>Контакти</ContactsTitle>
            <InputRows>
              <InputRow>
                <InputGroup>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Введіть номер телефону"
                  />
                </InputGroup>
              </InputRow>
              
              <InputRow>
                <InputGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введіть email"
                  />
                </InputGroup>
              </InputRow>
              
              <InputRow>
                <InputGroup>
                  <Label htmlFor="socialMedia">Соцмережі</Label>
                  <Input 
                    id="socialMedia"
                    type="text" 
                    value={socialMedia}
                    onChange={(e) => setSocialMedia(e.target.value)}
                    placeholder="Введіть посилання на соцмережі"
                  />
                </InputGroup>
              </InputRow>
            </InputRows>
          </ContactsBlock>
        </TwoColumnLayout>

        <CollapsibleSection helpTooltiptitle={"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊"} helpTooltip={"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊"}  top="-700%" left="-310%" title={'Фізичні дані'}>
          <InputsContainer hasphysique>
              <InputGroup>
                <Label htmlFor="height">Зріст у м.</Label>
                <Input  
                  id="height"
                  type="number"
                  min="0"
                  max="4"
                  placeholder="Введіть зріст у м."
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="weight">Вага у кг.</Label>
                <Input 
                  id="weight"
                  min="0"
                  max="400"
                  step="0.1"
                  placeholder="Введіть вагу у кг."
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
               <Label htmlFor="dateOfMeasurement">Дата вимірювання</Label>
                  <WrapperInput>
                    <CustomDatePicker 
                      selectedDate={dateOfMeasurement} 
                      onDateChange={setDateOfMeasurement} 
                    />
                </WrapperInput>
              </InputGroup>
            </InputsContainer>
        </CollapsibleSection>

        <CollapsibleSection title={'Спортивна інформація'}>
          Будь-який контент
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