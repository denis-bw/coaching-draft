import styled, { css } from "styled-components";
import { ReactComponent as OriginalCameraIcon } from "../../../assets/CameraIcon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus.svg";

const breakpoints = {
  mobile: '320px',
  desktop: '1024px'
};


export const LoaderWrapper = styled.div`
  position: sticky; 
  left: 0; 
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
`;

export const Container = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  
  background: ${({ blurred }) => (blurred ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  backdrop-filter: ${({ blurred }) => (blurred ? 'blur(10px)' : 'none')};
  -webkit-backdrop-filter: ${({ blurred }) => (blurred ? 'blur(10px)' : 'none')};
  filter: ${({ blurred }) => (blurred ? 'blur(3px)' : 'none')};
  pointer-events: ${({ blurred }) => (blurred ? 'none' : 'auto')};
  border-radius: 16px;
  box-shadow: ${({ blurred }) => (blurred ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${breakpoints.desktop}) {
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

export const TwoColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const FirstSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 0;
  }
`;

export const SecondSection = styled.div`
  flex: 1;
  min-height: 300px;
  background-color: ${({ theme }) => theme.ContainerBGColor || '#f8f8f8'};
  border-radius: 8px;
  
  @media (max-width: ${breakpoints.desktop}) {
    min-height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const PhotoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${breakpoints.desktop}) {
    width: 8rem;
    height: 8rem;
  }
`;

export const PhotoCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white || '#fff'};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.borderColor || '#e0e0e0'};
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
  background-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  color: ${({ theme }) => theme.white || '#fff'};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({ theme }) => theme.white || '#fff'};
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen || '#388E3C'};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.greenMain || '#4CAF50'}, 0 0 0 6px ${({ theme }) => theme.white || '#fff'};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.darkGreen || '#388E3C'};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.greenMain || '#4CAF50'}, 0 0 0 6px ${({ theme }) => theme.white || '#fff'};
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const InfoSection = styled.div`
  flex: 1;
`;



export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textBlack};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme, isError }) => 
    (isError) ? (theme.red || '#F44336') : (theme.borderColor || '#e0e0e0')};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor || '#f8f8f8'};
  color: ${({ theme }) => theme.textBlack || '#212121'};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen || '#8BC34A'};
    box-shadow: 0 0 0 2px ${({ theme }) => 
      `rgba(${parseInt((theme.lightGreen || '#8BC34A').slice(1, 3), 16)}, 
      ${parseInt((theme.lightGreen || '#8BC34A').slice(3, 5), 16)}, 
      ${parseInt((theme.lightGreen || '#8BC34A').slice(5, 7), 16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textGray || '#9e9e9e'};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.ContainerBGColor || '#f8f8f8'} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.textBlack || '#212121'};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({ theme }) => theme.lightGreen || '#8BC34A'};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({ theme }) => theme.red || '#F44336'};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({ theme }) => 
      `rgba(${parseInt((theme.red || '#F44336').slice(1, 3), 16)}, 
      ${parseInt((theme.red || '#F44336').slice(3, 5), 16)}, 
      ${parseInt((theme.red || '#F44336').slice(5, 7), 16)}, 0.5)`};
  }
  
&:disabled {
  background-color: ${({ theme }) => theme.disabledBG};
  color: ${({ theme }) => theme.textGray};
  cursor: not-allowed;
}

`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const Button = styled.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.greenMain || '#4CAF50'};
  color: ${({ theme }) => theme.white || '#fff'};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen || '#388E3C'};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.darkGreen || '#388E3C'};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG || '#e0e0e0'};
    cursor: not-allowed;
    color: ${({ theme }) => theme.textGray};
  }
`;

export const CameraIcon = styled(OriginalCameraIcon)`
  fill: ${(p) => p.theme.white || '#fff'};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${breakpoints.desktop}) {
    width: 18px;
    height: 18px;
  }
`;

export const CancelPhotoButton = styled.button`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#e0e0e0' : '#343434'};
  border: 2px solid
    ${({ theme }) =>
    theme.mode === 'dark' ? '#e0e0e0' : '#343434'};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? '#ffffff' : '#555555'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0 0 4px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)'
        : '0 0 0 4px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.35)'};
    transform: scale(1.05);
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const CancelIcon = styled(MinusIcon)`
  fill: ${({ theme }) =>
    theme.mode === 'dark' ? '#343434' : '#ffffff'};
  width: 12px;
  height: 12px;
  transform: rotate(180deg);

  @media (min-width: ${breakpoints.desktop}) {
    width: 14px;
    height: 14px;
  }
`;