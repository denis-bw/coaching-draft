import styled, { css } from "styled-components";
import { ReactComponent as OriginalCameraIcon } from "../../../assets/CameraIcon.svg";

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
  background-color: ${({ theme }) => theme.ContainerBGColor};
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
  background-color: ${({ theme }) => theme.white};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.disabledBG};
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
    (isError) ? (theme.red) : (theme.disabledBG)};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => 
      `rgba(${parseInt((theme.lightGreen).slice(1, 3), 16)}, 
      ${parseInt((theme.lightGreen).slice(3, 5), 16)}, 
      ${parseInt((theme.lightGreen).slice(5, 7), 16)}, 0.5)`};
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
    box-shadow: 0 0 0 2px ${({ theme }) => 
      `rgba(${parseInt((theme.red).slice(1, 3), 16)}, 
      ${parseInt((theme.red).slice(3, 5), 16)}, 
      ${parseInt((theme.red).slice(5, 7), 16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
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
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.darkGreen};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    color: ${({ theme }) => theme.textGray};
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
  
  @media (min-width: ${breakpoints.desktop}) {
    width: 18px;
    height: 18px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.greenMain};
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  background-color: ${({ $isActive, theme }) => 
    $isActive ? theme.greenMain : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.white : theme.greenMain};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.greenMain};
  }
  
  &:hover {
    background-color: ${({ $isActive, theme }) => 
      $isActive 
        ? theme.darkGreen
        : theme.lightGreen + '40'};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.greenMain};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;