import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { CustomDatePicker } from "../../../../components/CustomDatePicker/CustomDatePicker";
import profilePlaceholder from "../../../../assets/PlaceholderProfile.png";
import CollapsibleSection from './CollapsibleSection/CollapsibleSection';
import CustomSelectComponent from './CustomSelectComponent';
import TeamsList from './TeamsList/TeamsList'
import PreviousEstablishments from './PreviousEstablishments/PreviousEstablishments';
import MedicalInformation from './MedicalInformation.jsx/MedicalInformation';


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
   SecondBlock,
  ContactsTitle,
  InputRows,
  InputRow, 
  Textarea,
  EducationalInstitutionsContainer,
  CoachInfoContainer,
  ColumnSection,
} from './AthleteCreate.styled';

const AthleteCreate = () => {
  const { setTitle } = useOutletContext();
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
  
  const [role, setRole] = useState('');
  const [sportCategory, setSportCategory] = useState('');
  const [notes, setNotes] = useState('');

  const [selectedTeam, setSelectedTeam] = useState(null);

  const [university, setUniversity] = useState("");
  const [school, setSchool] = useState("");

  const [currentSportInstitution, setCurrentSportInstitution] = useState('');
  const [trainer, setTrainer] = useState('');
  const [trainerContacts, setTrainerContacts] = useState('');
  const [entryDate, setEntryDate] = useState(null);
  
  const [establishmentsData, setEstablishmentsData] = useState({});

  const [medicalData, setMedicalData] = useState({
    allergies: "",
    diseases: "",
  });
  const [medicalInformation,  setMedicalInformation] = useState({});
 
  useEffect(() => {
    setTitle("Створення нового спортсмена");
  }, [setTitle]);
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const fileInput = document.getElementById('photo-upload');
        if (fileInput) {
          fileInput.click();
        }
      }
    };

  
  return (
    <>
    <Container>
      <Card>
        <ContentWrapper>
                    <PhotoSection>
            <PhotoWrapper>
              <PhotoCircle>
                <ProfileImage src={profilePlaceholder} alt="Фото спортсмена" />
              </PhotoCircle>
              <PhotoUploadButton htmlFor="photo-upload" tabIndex={0}   onKeyDown={handleKeyDown} >
                <CameraIcon />
              </PhotoUploadButton>
              <HiddenInput
                id="photo-upload"
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
              />
            </PhotoWrapper>
          </PhotoSection>
          
          <InfoSection>
            <InfoTitle>Особиста інформація</InfoTitle>
            <InputsContainer>
              <InputGroup>
                <Label htmlFor="firstName">Ім'я *</Label>
                <Input 
                  id="firstName"
                    type="text" 
                     placeholder="Введіть ім'я"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="lastName">Прізвище *</Label>
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
                  <Label htmlFor="birthdate">Дата народження *</Label>
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
          
          < SecondBlock>
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
          </ SecondBlock>
        </TwoColumnLayout>

        <CollapsibleSection helpTooltiptitle={"Ці параметри не є обов'язковими, але вони допомагають отримати детальнішу статистику 📊"} helpTooltip={"Додайте перший замір щоб відстежувати зміни спортсмена. Після створення профілю спортсмена ви зможете додавати нові заміри та повністю керувати ними 😊"}  title={'Фізичні дані'}>
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
          <TwoColumnLayout $hasSportInfo={true}>
            <FormBlock $hasSportInfo={true}>
              <InputRows>
                <InputRow>
                  <InputGroup>
                    <Label htmlFor="role">Роль у команді</Label>
                    <Input 
                      id="role"
                      type="text" 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Введіть роль у команді"
                    />
                  </InputGroup>
                </InputRow>

                <InputRow>
                  <InputGroup>
                    <Label htmlFor="sportCategory">Спортивний розряд</Label>
                    <Input 
                      id="sportCategory"
                      type="text" 
                      value={sportCategory}
                      onChange={(e) => setSportCategory(e.target.value)}
                      placeholder="Введіть спортивний розряд"
                    />
                  </InputGroup>
                </InputRow>

                <InputRow>
                  <InputGroup>
                    <Label htmlFor="notes">Примітки про спортсмена</Label>
                    <Textarea 
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Додайте примітки про спортсмена"
                    />
                  </InputGroup>
                </InputRow>
              </InputRows>
            </FormBlock>

          <SecondBlock $hasSportInfo>
              <TeamsList />
            </ SecondBlock>
          </TwoColumnLayout>
        </CollapsibleSection>

          
        <CollapsibleSection title={'Навчальні заклади'}>
          <EducationalInstitutionsContainer>
            <InputRow>
            <InputGroup>
              <Label htmlFor="school">Школа</Label>
                  <Input id="school"
                    type="text"
                    placeholder="Введіть назву школи"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)} />
            </InputGroup>

            <InputGroup $isUniversity>
              <Label htmlFor="university">Університет</Label>
                  <Input
                    id="university"
                    type="text"
                    placeholder="Введіть назву університету"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)} 
                  />
            </InputGroup>
            </InputRow>
          </EducationalInstitutionsContainer> 
        </CollapsibleSection>
          
        <CollapsibleSection title={'Спортивний заклад'}>
          <Card $isSportsFacility>
      <CoachInfoContainer >
        <ColumnSection $isSportsFacility>
          <InputGroup>
            <Label>Поточний спортивний заклад</Label>
            <Input 
              type="text"
              value={currentSportInstitution}
              onChange={(e) => setCurrentSportInstitution(e.target.value)}
              placeholder="Введіть назву закладу"
            />
          </InputGroup>
          <InputGroup>
            <Label>Тренер</Label>
            <Input 
              type="text"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              placeholder="Введіть ім'я тренера"
            />
          </InputGroup>
        </ColumnSection>
        
        <ColumnSection $isSportsFacility>
          <InputGroup>
            <Label>Контакти тренера</Label>
            <Input 
              type="text"
              value={trainerContacts}
              onChange={(e) => setTrainerContacts(e.target.value)}
              placeholder="Введіть контакти"
            />
          </InputGroup>
          <InputGroup>
            <Label>Дата вступу</Label>
            <WrapperInput>
              <CustomDatePicker 
                selectedDate={entryDate} 
                onDateChange={setEntryDate} 
              />
            </WrapperInput>
          </InputGroup>
        </ColumnSection>
      </CoachInfoContainer>
    </Card>
      </CollapsibleSection>
          
        <CollapsibleSection title={'Минулі спортивні заклади'}>
          <PreviousEstablishments 
            onDataUpdate={setEstablishmentsData} 
          />
        </CollapsibleSection>
          
        <CollapsibleSection title={'Медична інформація'}>
            <MedicalInformation onDataUpdate={setMedicalInformation} medicalData={medicalData} setMedicalData={setMedicalData}  />
        </CollapsibleSection>

        <CollapsibleSection title={'TESR'}>
           <p>asdf</p>
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