import styled from 'styled-components';
import { ReactComponent as OriginalMoonIcon } from '../../assets/MoonIcon.svg';
import { ReactComponent as OriginalSunIcon } from '../../assets/SunIcon.svg';
import { ReactComponent as OriginalMenuIcon } from '../../assets/MenuIcon.svg';


export const MenuIcon = styled(OriginalMenuIcon)`
  width: 24px;
  height: 24px;
  stroke: ${(p) => p.theme.iconColor};
`;

export const MoonIcon= styled(OriginalMoonIcon)`
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: ${(p) => p.theme.iconColor};
`;

export const SunIcon = styled(OriginalSunIcon)`
  fill: ${(p) => p.theme.iconColor};
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: ${(p) => p.theme.iconColor};
`;


export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  padding: 20px 56px 0px 56px;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto; 
    gap: 5px;
    padding: 16px 18px 0px 18px;
  }
`;

export const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-column: 1 / -1; 
    text-align: center;
    margin-top: 8px;
    font-size: 20px;
  }
`;

export const ContanerSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: max-content;

  @media (max-width: 768px) {
    justify-self: end; 
    grid-column: 2 / 3;
    grid-row: 1;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-self: start; 
    grid-column: 1 / 2;
    grid-row: 1;
  }
`;

export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.textBlack};
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0.8)};

  &:hover {
    transform: scale(1.2) ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TexeName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  max-width: 90px;

  @media (max-width: 768px) {
    max-width: 62px;
  }
`;
export const ImgAvatar =  styled.img`
  background-color: ${({ theme }) => theme.white};
  overflow: hidden;
  border: 2px solid ${ ({ theme }) => theme.borderColor };
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

