import styled from 'styled-components';

export const TeamItemWrapper = styled.div`
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.6)};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.9)')};
  width: 100%;
  &:not(:first-child) {
    padding-top: 10px;
  }
  @media (max-width: 768px) {
    transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.85)')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0.5)};
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

export const TeamButton = styled.button`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 14px;
  grid-gap: 12px;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ theme, isSelected }) => 
    isSelected ? theme.greenMain : theme.disabledBG};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.textBlack};
  width: 100%;
  box-sizing: border-box;
  border: none;
  text-align: left;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme, isSelected }) => 
      isSelected ? theme.greenMain : `${theme.greenMain}80`};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme, isSelected }) => 
      isSelected ? theme.greenMain : `${theme.greenMain}80`};
  }

  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.greenMain};
    outline-offset: 1px;
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

export const TeamsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 324px;
  max-height: 324px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.greenMain};
  border-radius: 10px;
  @media (max-width: 768px) {
    border-radius: 8px;
  }
   @media (max-width: 1024px) {
     min-height: 140px;
  }
`;

export const TeamsListContainer = styled.div`

  gap: 8px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px 0px;
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  max-height: calc(100% - 60px); 
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 15px 15px;
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
  overflow: hidden; 
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`;

export const TeamsHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  margin-bottom: 15px;
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
    
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