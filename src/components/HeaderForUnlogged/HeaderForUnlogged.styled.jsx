import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({ theme }) => theme.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({ theme }) => theme.greenMain};

  &:focus {
    color: ${({ theme }) => theme.textGray};
  }

  &:hover {
    color: ${({ theme }) => theme.textGray};
  }
`;