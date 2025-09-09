import styled from 'styled-components';

// Модальне вікно - накладка
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Контент модалки
export const ModalContent = styled.div`
  background: ${({ theme }) => theme.ContainerBGColor};  // Використовуємо тему
  padding: 24px;
  border-radius: 14px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Заголовок модалки
export const ModalHeader = styled.div`
  margin-bottom: 16px;
`;

// Назва модалки
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.textBlack};  // Використовуємо тему
  margin-bottom: 8px;
`;

// Опис модалки
export const ModalDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textGray};  // Використовуємо тему
  font-size: 14px;
  line-height: 1.5;
`;

// Нижня частина модалки
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`;

// Загальний стиль кнопки
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  background-color: ${({ theme }) => theme.greenMain};  // Використовуємо тему
  color: ${({ theme }) => theme.white};  // Використовуємо тему

  &:hover {
    background-color: ${({ theme }) => theme.BgActiveLinkHover};  // Використовуємо тему
  }

  &:active {
    transform: translateY(0);
  }
`;


export const CancelButton = styled(Button)`
  
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.black};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.gray};
    outline-offset: 2px;
     background-color: ${({ theme }) => theme.black};
  }
`;


export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.red}; 
  color: ${({ theme }) => theme.white}; 
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.redDark};  
  }

    &:focus {
    outline: 2px solid ${({ theme }) => theme.gray};
    outline-offset: 2px;
     background-color: ${({ theme }) => theme.redDark};
  }
`;
