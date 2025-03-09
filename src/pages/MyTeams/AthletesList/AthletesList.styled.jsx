import styled from 'styled-components';

export const AthletesWrapper = styled.div` 
  display: flex; 
  justify-content: center; 
  flex: 1; 
  padding-top: 20px; 
  padding-bottom: 20px; 
  overflow: hidden; 
  height: 100%; 
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
  padding-right: 20px; 
  padding-left: 20px;
  position: relative; 
  padding-bottom: 20px; 
  
  @media (max-width: 768px) { 
    padding-left: 10px;
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












export const AthletesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
    border-color: ${({ theme }) => theme.greenMain};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 6px 10px;
    font-size: 11px;
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

export const AthleteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.lightGreen + '40'};
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.textBlack};

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen + '80'};
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
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
  margin-right: 12px;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`;

export const AthleteInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AthleteName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.textBlack};
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TeamName = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textGray};
  
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

export const AddNewAthleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 12px;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
`;

