import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as OriginalRoadSignPointingRight } from '../../../assets/RoadSignPointingRight.svg';
import { ReactComponent as OriginalCreateIcon } from '../../../assets/CreateIcon.svg';
import { NavLink } from 'react-router-dom';

export const RoadSignPointingRightIcon = styled(OriginalRoadSignPointingRight)`
  width: 24px;
  height: 24px;
  fill: ${(p) => p.theme.iconColor};
`;

export const CreateIcon = styled(OriginalCreateIcon)`
  width: 20px;
  height: 20px;
  fill: white;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 360px) {
    width: 16px; 
    height: 16px;
    right: 12px;
  }
`;

export const AthleteItemWrapper = styled.div`
  width: 100%;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  
  &.visible {
    opacity: 1;
    transform: scale(1);
  }
  
  &.hidden {
    opacity: 0.6;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    &.visible {
      opacity: 1;
      transform: scale(1);
    }
    
    &.hidden {
      opacity: 0.5;
      transform: scale(0.85);
    }
  }
`;

export const FilterDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.mainBGColor}; 
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  min-width: 120px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0.2, 0.2);
  z-index: 10;

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 11px;
  }
`;

export const DropdownOption = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.lightGreen : 'transparent'};
  color: ${({ active, theme }) => active ? theme.textBlack : theme.textGray}; 
  font-weight: ${({ active }) => active ? '500' : '400'};
  border: none;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({ theme, active }) => active ? theme.lightGreen : theme.disabledBG};
    color: ${({ theme }) => theme.textBlack}; 
  }

  &:focus {
    background-color: ${({ theme, active }) => active ? theme.lightGreen : theme.disabledBG};
    color: ${({ theme }) => theme.textBlack}; 
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;


export const EmptyStateMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
  text-align: center;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 30px 15px;
  }
`;

export const AthleteItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.lightGreen };
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.textBlack};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.greenMain};
  }

  &:focus {
    background-color: ${({ theme }) => theme.greenMain};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    grid-template-columns: 28px minmax(0, 1fr) 12px; 
    grid-gap: 10px;
  }
`;

export const AthleteIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const AthleteInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`;

export const AthleteName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.textBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TeamName = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const ChevronWrapper = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textGray};
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const AthletesContainer = styled.div`
  width: calc(100% - 60px); 
  padding: 20px; 
  padding-bottom: 14px;
  background-color: ${({ theme }) => theme.ContainerBGColor}; 
  border-radius: 10px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  display: flex; 
  flex-direction: column; 
  height: 100%;
  min-height: 240px;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    width: calc(100% - 30px); 
    padding: 15px; 
    border-radius: 8px; 
  } 
`;


export const AthletesListContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  flex: 1; 
  overflow-y: auto;
  overflow-x: hidden; 
  padding-right: 20px; 
  padding-left: 20px;
  position: relative; 
  padding-bottom: 20px; 
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) { 
    padding-left: 6px;
    padding-right: 10px;
  } 
 
  &::-webkit-scrollbar { 
    width: 6px; 
  } 
 
  &::-webkit-scrollbar-track { 
    background: ${({ theme }) => theme.disabledBG}; 
    border-radius: 10px; 
  } 
 
  &::-webkit-scrollbar-thumb { 
    background: ${({ theme }) => theme.greenMain}; 
    border-radius: 10px; 
  } 
`;


export const AthletesWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex: 1; 
  padding-top: 20px; 
  padding-bottom: 20px; 
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
`;

export const AddNewAthleteButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  padding-right: 40px; 

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  &:focus {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    padding-right: 36px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding-right: 32px; 
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  
  @media (min-width: 850px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35%; 
    max-width: 400px; 
    min-width: 70px; 
    z-index: 1; 
  }
  
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border: 2px solid ${({ theme }) => theme.ContainerBGColor};
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  color: ${({ theme }) => theme.textBlack};
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.textBlack};
  }
  
  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.textBlack};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;


export const AthletesHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 20px -20px;
  position: relative;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    z-index: 2; 
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`;


export const FilterButton = styled.button`  
  background-color: ${({ theme }) => theme.greenMain};
  border: 1.7px solid ${({ theme }) => theme.white};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  min-width: 120px;
  transition: all 0.3s ease;
  z-index: 2;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
    border-color: ${({ theme }) => theme.greenMain};
  }

  &:focus {
    background-color: ${({ theme }) => theme.darkGreen};
    border-color: ${({ theme }) => theme.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
  }
`;

export const ProfileImageAthletes = styled.img`
border: 2px solid  ${({ theme }) => theme.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const AthleteItemStyled = styled(AthleteItem)`
  background-color: ${({ theme }) => `${theme.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  .hidden & {
    background-color: ${({ theme }) => `${theme.lightGreen}40`};
  }
`;

export const LoaderContainer = styled.div`
  height: 80px; 
  width: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  margin: 0 auto;
`;
