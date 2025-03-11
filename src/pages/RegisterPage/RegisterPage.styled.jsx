import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 20px; 
  }
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textBlack};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme }) => theme.textGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: all 0.2s ease-in-out;
  
&:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
}

&::placeholder {
    color: ${({ theme }) => theme.textGray};
}

&:-webkit-autofill {
    border-color: ${({ theme }) => theme.lightGreen};
}

&:valid {
    border-color: ${({ theme }) => theme.lightGreen};
}

&:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({ theme }) => theme.red};
}

&:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.red.slice(1, 3), 16)}, ${parseInt(theme.red.slice(3, 5), 16)}, ${parseInt(theme.red.slice(5, 7), 16)}, 0.5)`};
}
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.textGray};
  font-size: 0.875rem;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.darkGreen};
    text-decoration: underline;
  }
  &:focus {
    color: ${({ theme }) => theme.darkGreen};
    text-decoration: underline;
  }
`;

export const PasswordRequirement = styled.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textGray};
`;

export const RequirementItem = styled.p`
  display: flex;
  align-items: center;
  
  svg {
    color: ${({ isValid, theme }) => 
      isValid ? theme.greenMain : theme.textGray};
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.red};
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.iconColor};
  cursor: pointer;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.textGray};
  }

  &:hover {
    color: ${({ theme }) => theme.textGray};
    outline: none;
  }
`;

