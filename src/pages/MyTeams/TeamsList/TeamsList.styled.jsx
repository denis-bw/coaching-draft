import styled from 'styled-components';
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

export const TeamItemWrapper = styled.div`
  width: 100%;
  opacity: 0.6;
  transform: scale(0.9);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  @media (max-width: 768px) {
    opacity: 0.5;
    transform: scale(0.85);
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

export const TeamItem = styled(NavLink)`
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

export const TeamIconWrapper = styled.div`
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

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; 
`;

export const TeamName = styled.span`
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

export const TeamsContainer = styled.div`
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

export const TeamsListContainer = styled.div`
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
  scroll-behavior: smooth;
  
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

export const TeamsWrapper = styled.div`
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

export const AddNewTeamButton = styled(NavLink)`
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
  width: 35%;
  max-width: 400px;
  min-width: 150px;
  
  @media (max-width: 768px) {
    width: 45%;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    width: 50%;
    min-width: 100px;
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

export const TeamsHeader = styled.div`
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
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    margin: -15px -15px 15px -15px;
    
    h2 {
      font-size: 16px;
    }
  }
`;

export const ProfileImageTeams = styled.img`
  border: 2px solid  ${({ theme }) => theme.greenMain};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const TeamItemStyled = styled(TeamItem)`
  background-color: ${({ theme }) => `${theme.lightGreen}80`};
  transition: background-color 0.3s ease-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.greenMain};
  }
`;