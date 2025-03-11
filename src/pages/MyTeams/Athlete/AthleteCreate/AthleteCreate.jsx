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
  FormGroup,
  FormRow,
  Label, 
  Input, 
  HiddenInput,
  Button,
  ButtonWrapper,
  WrapperInput,
  CameraIcon,
} from './AthleteCreate.styled'

const AthleteCreate = () => {
  const { setTitle } = useOutletContext();
  const [isFocused, setIsFocused] = useState(false);
  const [fullName, setFullName] = useState("");

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
                accept="image/jpeg,image/jpg,image/png,image/webp"
              />
            </PhotoWrapper>
          </PhotoContainer>

          <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="fullName">Ім'я спортсмена</Label>
                <Input 
                  id="fullName" 
                  name="fullName"
                  placeholder="Введіть ім'я спортсмена"
                  maxLength={25}
                  minLength={3}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  $isEmpty={!isFocused && fullName === ''} 
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="sportType">Вид спорту</Label>
                <Input 
                  id="sportType" 
                  name="sportType"
                  placeholder="Введіть вид спорту"
                  maxLength={30}
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="birthdate">Дата народження</Label>
                <CustomDatePicker 
                  
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="location">Локація</Label>
                <Input 
                  id="location" 
                  name="location"
                  placeholder="Введіть локацію спортсмена"
                  maxLength={50}
                 
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

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