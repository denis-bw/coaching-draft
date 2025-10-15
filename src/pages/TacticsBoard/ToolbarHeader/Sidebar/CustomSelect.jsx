import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIconSrc } from "../../../../assets/ChevronDownicon.svg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 10px 40px 10px 12px;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border: 1.6px solid ${({ theme }) => theme.greenMain};
  border-radius: 8px;
  color: ${({ theme }) => theme.textBlack};
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  position: relative;
  font-family: ${({ $fontFamily }) => $fontFamily || 'Arial'};
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.darkGreen};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGreen};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border: 1px solid ${({ theme }) => theme.darkGreen};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 6px 8px;
  font-family: ${({ $fontFamily }) => $fontFamily || 'Arial'};
  cursor: pointer;
  color: ${({ theme }) => theme.textBlack};
  background-color: ${({ selected, theme }) =>
    selected ? theme.lightGreen : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
  }
`;

const ArrowIcon = styled(ArrowIconSrc)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(${({ $open }) => ($open ? '180deg' : '0')});
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.iconColor};
  transition: transform 0.3s ease;
`;

const CustomSelect = ({
  value,
  onChange,
  options = [],
  placeholder = 'Оберіть...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    close();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Wrapper ref={ref}>
      <SelectButton onClick={toggle} $fontFamily={selectedOption?.value}>
        {selectedOption ? selectedOption.label : placeholder}
        <ArrowIcon $open={isOpen} />
      </SelectButton>
      {isOpen && (
        <Dropdown>
          {options.map((opt) => (
            <Option
              key={opt.value}
              onClick={() => handleOptionClick(opt.value)}
              selected={opt.value === value}
              $fontFamily={opt.value}
            >
              {opt.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default CustomSelect;
