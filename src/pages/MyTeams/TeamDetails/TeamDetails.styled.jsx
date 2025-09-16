import styled, { css } from "styled-components";
import { ReactComponent as OriginalCameraIcon } from "../../../assets/CameraIcon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus.svg";
import { ReactComponent as DeleteIconOriginal } from '../../../assets/DeleteIcon.svg';

const breakpoints = {
  mobile: '320px',
  desktop: '1024px'
};

export const CenteredPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const CenteredCard = styled.div`
  padding: 2rem 3rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.red};
  }
`;

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
  
  background: ${({ blurred, theme }) => (blurred ? `rgba(${theme.ContainerBGColor === '#ffffff' ? '255, 255, 255' : '77, 77, 77'}, 0.2)` : 'transparent')};
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

export const PhotoActionButtonsContainer = styled.div`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (min-width: ${breakpoints.desktop}) {
    top: -0.4rem;
    right: -0.4rem;
    gap: 0.4rem;
  }
`;

export const DeleteButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.redDark};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.redDark};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.red}, 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const CancelButton = styled.button`
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

export const DeleteIcon = styled(DeleteIconOriginal)`
  stroke: ${({ theme }) => theme.white};
  fill: none; 
  width: 12px;
  height: 12px;

  @media (min-width: ${breakpoints.desktop}) {
    width: 14px;
    height: 14px;
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
  background-color: ${({ theme, $hasChanges, $isDelete }) => {
    if ($isDelete) return theme.red;
    if ($hasChanges) return theme.greenMain;
    return theme.disabledBG;
  }};
  color: ${({ theme, $hasChanges, $isDelete }) => {
    if ($isDelete) return theme.white;
    if ($hasChanges) return theme.white;
    return theme.textGray;
  }};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({ $hasChanges, $isDelete }) => ($hasChanges || $isDelete) ? 'pointer' : 'not-allowed'};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, $hasChanges, $isDelete }) => {
      if ($isDelete) return theme.redDark;
      if ($hasChanges) return theme.darkGreen;
      return theme.disabledBG;
    }};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme, $hasChanges, $isDelete }) => {
      if ($isDelete) return theme.redDark;
      if ($hasChanges) return theme.darkGreen;
      return theme.disabledBG;
    }};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    color: ${({ theme }) => theme.textGray};
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 0.8rem;
  }

`;

export const DeleteConfirmModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DeleteConfirmContent = styled.div`
  background-color: ${({ theme }) => theme.ContainerBGColor};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const DeleteConfirmTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textBlack};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const DeleteConfirmText = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textBlack};
  line-height: 1.5;
`;

export const DeleteConfirmActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const DeleteConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.redDark};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.red};
    outline-offset: 2px;
  }
`;

export const DeleteCancelButton = styled.button`
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.textGray};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.gray};
    outline-offset: 2px;
  }
`;

export const CameraIcon = styled(OriginalCameraIcon)`
  fill: ${({ theme }) => theme.white};
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.ContainerBGColor};
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({ theme }) => theme.gray};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textBlack};
  text-align: center;
  margin-top: 0;
`;

export const ModalText = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textGray};
  line-height: 1.5;
  text-align: center;
  margin-top: 0;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const ModalBaseButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out,
            transform 0.2s ease-in-out;

  font-size: 14px;
  min-width: 100px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.lightGreen};
    outline-offset: 2px;
  }
`;

export const ModalCancelButton = styled(ModalBaseButton)`
  border: 1px solid ${({ theme }) => theme.textBlack};
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};

  &:hover {
    background-color: ${({ theme }) => theme.black};
    border-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`;

export const ModalDeleteButton = styled(ModalBaseButton)`
  border: none;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme.redDark};
  }
`;