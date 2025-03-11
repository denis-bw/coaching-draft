import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 40px; 
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.textBlack};
  margin-bottom: 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.textGray};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  transition: color 0.2s ease-in-out;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.875rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.primary {
    background-color: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
    
    &:hover {
      background-color: ${({ theme }) => theme.darkGreen};
    }
      &:focus {
      background-color: ${({ theme }) => theme.darkGreen};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.textBlack};
    border: 2px solid ${({ theme }) => theme.greenMain};
    
    &:hover {
      background-color: ${({ theme }) => theme.BgActiveLink};
      border-color: ${({ theme }) => theme.BgActiveLink};
      color: ${({ theme }) => theme.white};
    }

    &:focus {
      background-color: ${({ theme }) => theme.BgActiveLink};
      border-color: ${({ theme }) => theme.BgActiveLink};
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    padding: 1rem 2rem;
  }
`;

