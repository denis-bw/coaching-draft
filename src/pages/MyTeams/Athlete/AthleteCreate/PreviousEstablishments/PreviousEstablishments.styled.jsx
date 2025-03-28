import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.ContainerBGColor};
`;
export const InstitutionsListContainer = styled.div`
    padding: 10px 0;
    border: 1.6px solid ${({ theme }) => theme.gray};
    border-radius: 0.5rem;
   margin-bottom: 1rem;
`

export const InstitutionsList = styled.div`
  flex-grow: 1;
  max-height: 300px;
  overflow-y: auto;
  display: ${({ $hasInstitutions }) => $hasInstitutions ? 'block' : 'none'};
  background-color: ${({ theme }) => theme.ContainerBGColor};
  
`;

export const InstitutionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.ContainerBGColor};
  transition: background-color 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.mainBGColor};
  }

  // Обмеження для тексту в картках
  & > div > div > span {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InstitutionDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textBlack};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.red};
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.redDark};
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textPrimary || theme.textBlack};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ $error, theme }) => $error ? theme.red : theme.borderColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};

  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.lightGreen};
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.ContainerBGColor} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.textBlack};
    transition: background-color 5000s ease-in-out 0s;
    border-color: ${({ theme }) => theme.lightGreen};
  }

  &:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      border-color: ${({ theme }) => theme.red};
  }

  &:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.red.slice(1, 3), 16)}, ${parseInt(theme.red.slice(3, 5), 16)}, ${parseInt(theme.red.slice(5, 7), 16)}, 0.5)`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 0.75rem;
  margin-left: 0.5rem;
`;

export const AddButton = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.darkGreen};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const DateInputGroup = styled(InputGroup)`
  flex: 1;
`;

export const EmptyState = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textGray};
  padding: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
`;