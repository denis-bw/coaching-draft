import React, { useEffect } from 'react';
import { 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  CancelButton,
  ConfirmButton
} from './NavigationPrompt.styled';

export const NavigationPrompt = ({ isOpen, onConfirm, onCancel }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    onCancel();
  };

  return (
    <ModalOverlay onClick={handleCancel}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Незбережені зміни</ModalTitle>
          <ModalDescription>
            У вас є незбережені зміни. Якщо ви залишите цю сторінку, всі зміни будуть втрачені.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ConfirmButton onClick={handleConfirm}>
            Залишити сторінку
          </ConfirmButton>
          <CancelButton onClick={handleCancel}>
            Продовжити роботу
          </CancelButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};