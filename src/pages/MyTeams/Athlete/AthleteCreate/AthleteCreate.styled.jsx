import styled from "styled-components";
import { ReactComponent as OriginalCameraIcon } from "../../../../assets/CameraIcon.svg";
import "react-datepicker/dist/react-datepicker.css";

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
};

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    height: 100%;
  }
`;

export const Card = styled.form`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 22px 32px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const PhotoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    margin-right: 3.8rem;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center; 
  }

   @media (min-width: ${breakpoints.desktop}) {
    margin-right: 2rem;
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${breakpoints.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`;

export const PhotoCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.borderColor};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PhotoUploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({ theme }) => theme.white};
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
     box-shadow: 0 0 0 4px ${({ theme }) => theme.greenMain}, 0 0 0 6px ${({ theme }) => theme.white};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.darkGreen};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.greenMain}, 0 0 0 6px ${({ theme }) => theme.white};
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;


export const InfoSection = styled.div`
  flex: 1;
  
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center; 
  }
`;

export const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.greenMain};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${(props) => (props.hasphysique ? "20px" : "0")};
  padding-bottom: ${(props) => (props.hasphysique ? "20px" : "0")};
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme, $isEmpty, name }) => 
    ($isEmpty && name === 'username') ? theme.red : theme.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.lightGreen};
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.ContainerBGColor} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.textBlack};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({ theme }) => theme.lightGreen};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({ theme }) => theme.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.red.slice(1, 3), 16)}, ${parseInt(theme.red.slice(3, 5), 16)}, ${parseInt(theme.red.slice(5, 7), 16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGreenAlpha};
  }

  &:focus {
    outline: none;
     background-color: ${({ theme }) => theme.darkGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
`;

export const CameraIcon = styled(OriginalCameraIcon)`
  fill: ${(p) => p.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TwoColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
   margin-top: ${(props) => (props.$hasSportInfo ? '20px' : '0')};
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const FormBlock = styled.div`
  flex: 1;
  
  @media (min-width: ${breakpoints.desktop}) {
     margin-top: ${(props) => (props.$hasSportInfo ? "0" : '3.1rem')}
  }

  
`;

export const SecondBlock = styled.div`
  flex: 1;
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: ${(props) => (props.$hasSportInfo ? "20px" : '0')}
  }
`;



export const InputRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 20px;
    
    & > ${InputGroup} {
      flex: 1;
    }
  }
`;

export const ContactsTitle = styled(InfoTitle)`
  margin-bottom: 1rem;
  padding-top: 10px;

  @media (min-width: ${breakpoints.desktop}) {
    padding-top: 0;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme, $isEmpty, name }) => 
    ($isEmpty && name === 'notes') ? theme.red : theme.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: all 0.2s ease-in-out;
  resize: vertical;
  min-height: 120px;
  max-height: 300px;

  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.lightGreen};
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({ theme }) => theme.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.red.slice(1, 3), 16)}, ${parseInt(theme.red.slice(3, 5), 16)}, ${parseInt(theme.red.slice(5, 7), 16)}, 0.5)`};
  }
`;
