import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { CustomDatePicker } from "../../../../components/CustomDatePicker/CustomDatePicker";
import profilePlaceholder from "../../../../assets/PlaceholderProfile.png";

import {
  Container, 
  Card, 
  PhotoContainer, 
  PhotoWrapper, 
  PhotoCircle, 
  ProfileImage, 
  PhotoUploadButton, 
  HiddenInput,
  Button,
  ButtonWrapper,
  CameraIcon,
  Label,
  WrapperInput,
} from './AthleteCreate.styled'
import InfoInput from './InfoInput';

const AthleteCreate = () => {
  const { setTitle } = useOutletContext();
  const [isFocused, setIsFocused] = useState(false);
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  useEffect(() => {
    setTitle("Створення нового спортсмена");
  }, [setTitle]);
  

  return (
    <>
     
      <Container>
        <Card>
          <PhotoContainer>
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
          </PhotoContainer>

          < InfoInput id={"sportType"} name={"sportType"} placeholder={"Введіть вид спорту"} labelText={"Вид спорту"} maxLength={30}/>
          <Label htmlFor="birthdate">Дата народження</Label>
          <WrapperInput>
            <CustomDatePicker 
              selectedDate={birthdate} 
              onDateChange={setBirthdate} 
            />
          </WrapperInput>


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