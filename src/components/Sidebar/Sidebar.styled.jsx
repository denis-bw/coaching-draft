import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as OriginalRightChevronIcon } from '../../assets/RightChevronIcon.svg';
import { ReactComponent as OriginalLogoutIcon } from '../../assets/LogoutIcon.svg';
import { ReactComponent as OriginalCalendarIcon } from '../../assets/CalendarIcon.svg';

export const SidebarToggleButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${(p) => p.theme.greenMain};
  cursor: pointer;
  margin-bottom: 1rem;
  align-self: flex-end;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(p) => p.theme.darkGreen};
  }
  
  &:focus {
    color: ${(p) => p.theme.darkGreen};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor; 
  }
`;

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: ${(p) => p.theme.ContainerBGColor};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto; 
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101111;
    width: 100%;
    height: 100%;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    overflow-y: auto; 
  }
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color: ${(p) => p.theme.greenMain};
  text-decoration: none;

  &:focus {
    color: ${({ theme }) => theme.textGray};
  }

  &:hover {
    color: ${({ theme }) => theme.textGray};
  }
`;

 export const NamedMenu = styled.p`
  color: ${(p) => p.theme.textGray};
  text-decoration: none;
  font-size: 14px;
  padding: 0px 10px 14px 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 10px 56px 10px;
  @media (max-width: 768px) {
     padding: 0px 10px 26px 10px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: inherit;
  background-color: ${props => props.active ? props.theme.BgActiveLink : 'transparent'};
  border-radius: 0.25rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${props => props.as === 'div' && `
    cursor: pointer;
  `}
  &.active {
    background-color:  ${(p) => p.theme.BgActiveLink};
    color:  ${(p) => p.theme.textBlack};
  }

  &:hover {
    background-color:  ${(p) => p.theme.BgActiveLinkHover};
  }

  &:focus {
    background-color:  ${(p) => p.theme.BgActiveLinkHover};
  }
  
  ${({ as }) =>
    as === 'button' &&
    `
    width:100%;
    font: inherit;
  `}
`;

export const IconWrapper = styled.span`
  margin-right: 0.75rem;
  min-width: 18px;
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  padding: 0.75rem;
  background-color: ${(p) => p.theme.greenMain};
  color: ${(p) => p.theme.white};
  text-transform: uppercase;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: ${(p) => p.theme.darkGreen};
  }

  &:focus {
    background-color: ${(p) => p.theme.darkGreen};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  span {
    margin-left: 0.75rem;
  }
`;

export const SubMenu = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const SubMenuItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color:  ${(p) => p.theme.BgActiveLinkHover};
    color: ${(p) => p.theme.white};
  }

  &:focus {
    background-color:  ${(p) => p.theme.BgActiveLinkHover};
    color: ${(p) => p.theme.white};
  }

  &.active {
    color: ${(p) => p.theme.greenMain};
    font-weight: 700;
  }

  &:hover.active {
     color: ${(p) => p.theme.white};
  }

  &:focus.active {
     color: ${(p) => p.theme.white};
  }
`;

export const SidebarIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.theme.textBlack };
  }
`;

export const RightChevronIcon = styled(OriginalRightChevronIcon)`
  fill: ${(p) => p.theme.textBlack};
  width: 14px;
  height: 14px;
  margin-left: auto;
  transform: ${({ isActive }) => (isActive ? 'rotate(90deg)' : 'none')};
  transition: transform 0.3s ease;
`;


export const LogoutIcon = styled(OriginalLogoutIcon)`
  fill: ${(p) => p.theme.white};
  width: 18px;
  height: 18px;
  stroke-width: 12;
  stroke: ${(p) => p.theme.white};
  margin-right: 12px;
`;


export const CalendarIcon = styled(OriginalCalendarIcon)`
  stroke: ${(p) => p.theme.iconColor};
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
