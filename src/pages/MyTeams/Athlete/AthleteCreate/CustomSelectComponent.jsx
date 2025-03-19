import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIconSrc } from "../../../../assets/ChevronDownicon.svg";

const CustomSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const CustomPlaceholder = styled.span`
  color: ${({ theme }) => theme.textGray};
`;

const CustomSelect = styled.button.attrs({ type: "button" })`
  padding: 0.75rem 1rem;
  width: 100%;
  padding-right: 2.5rem;
  border: 1.6px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.darkGreen};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`;

const OptionButton = styled.button.attrs({ type: "button" })`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.textBlack};
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.lightGreen};
  }

  &.selected {
    background-color: ${({ theme }) => theme.darkGreen};
    color: ${({ theme }) => theme.white};
  }
`;

const ArrowIcon = styled(ArrowIconSrc)`
  stroke: ${(p) => p.theme.iconColor};
  stroke-width: 3;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) ${(p) => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
  width: 22px;
  height: auto;
`;

const CustomSelectComponent = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <CustomSelectWrapper ref={selectRef}>
      {label && <Label onClick={toggleDropdown}>{label}</Label>} 
      <CustomSelect onClick={toggleDropdown}>
        <CustomPlaceholder>{selectedValue || 'Не вибрано'}</CustomPlaceholder> 
        <ArrowIcon open={isOpen} />
      </CustomSelect>

      {isOpen && (
        <Dropdown>
          <OptionButton
            className={selectedValue === 'Чоловік' ? 'selected' : ''}
            onClick={() => handleSelectOption('Чоловік')}
          >
            Чоловік
          </OptionButton>
          <OptionButton
            className={selectedValue === 'Жінка' ? 'selected' : ''}
            onClick={() => handleSelectOption('Жінка')}
          >
            Жінка
          </OptionButton>
          <OptionButton
            className={selectedValue === '' ? 'selected' : ''}
            onClick={() => handleSelectOption('')}
          >
            Не вибрано
          </OptionButton>
        </Dropdown>
      )}
    </CustomSelectWrapper>
  );
};

export default CustomSelectComponent;
