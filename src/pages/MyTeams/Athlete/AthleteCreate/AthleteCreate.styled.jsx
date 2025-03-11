import styled from "styled-components";
import {ReactComponent as OriginalCameraIcon} from "../../../../assets/CameraIcon.svg"
import "react-datepicker/dist/react-datepicker.css";

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
};

export const Container = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;

export const FormContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto; 
`;


export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
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

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
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
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
`;

export const CameraIcon = styled(OriginalCameraIcon)`
  fill:  ${(p) => p.theme.white};
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












