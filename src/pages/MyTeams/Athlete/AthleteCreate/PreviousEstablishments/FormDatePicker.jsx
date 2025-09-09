import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth, addDays } from "date-fns";
import { uk } from "date-fns/locale";
import styled from 'styled-components';


const StyledDatePicker = styled(DatePicker)`
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
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 12px;
`;

const DatePickerSelectY = styled.select`
  padding: 6px 12px;
  width: 80px;
  border: 1.6px solid ${({ theme }) => theme.greenMain};
  border-radius: 6px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.2)`};
  }


`;

const DatePickerSelect = styled.select`
  padding: 6px 12px;
  width: 120px;
  border: 1.6px solid ${({ theme }) => theme.greenMain};
  border-radius: 6px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.2)`};
  }

`;

const CalendarContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__month-container {
    border-radius: 14px;
  }
  .react-datepicker-popper {
    border-radius: 14px;
  }
  .react-datepicker {
    border-radius: 14px;
    border: 3px solid ${({ theme }) => theme.greenMain};
    background-color: ${({ theme }) => theme.ContainerBGColor};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.ContainerBGColor};
    border-radius: 14px 14px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.greenMain};
    padding-top: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-radius: 14px 14px 0 0;
  }
  .react-datepicker__day-name {
    color: ${({ theme }) => theme.textBlack};
    font-size: 0.9rem;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover, 
  .react-datepicker__month-text:not([aria-disabled=true]):hover, 
  .react-datepicker__quarter-text:not([aria-disabled=true]):hover, 
  .react-datepicker__year-text:not([aria-disabled=true]):hover {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.darkGreen} !important;
    color: ${({ theme }) => theme.white};
  }
  .react-datepicker__day {
    color: ${({ theme }) => theme.textBlack};
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.darkGreen} !important;
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.darkGreen} !important;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.textBlack};
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.textGray};
  }
  
  .react-datepicker__day--disabled {
    color: ${({ theme }) => theme.textGray};
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: transparent !important;
      color: ${({ theme }) => theme.textGray} !important;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }
`;


const range = (start, end, step = 1) => {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

const FormDatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Оберіть дату", 
  hasError = false,
  minDate,
  maxDate
}) => {
 
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    try {
      const date = new Date(dateStr);
      return isNaN(date.getTime()) ? null : date;
    } catch {
      return null;
    }
  };

  const [date, setDate] = useState(() => parseDate(value));
  
  useEffect(() => {
    setDate(parseDate(value));
  }, [value]);
  
  const currentDate = new Date();
  const years = range(1900, getYear(currentDate));
  const months = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (newDate) {
     
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    onChange(`${year}-${month}-${day}`);
  } else {
    onChange('');
  }
  };

  let parsedMinDate = parseDate(minDate);
  
  if (parsedMinDate) {
    parsedMinDate = addDays(parsedMinDate, 0);
  }

  return (
    <CalendarContainer>
      <StyledDatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        placeholderText={placeholder}
        locale={uk}
        $error={hasError}
        minDate={parsedMinDate}
        maxDate={maxDate ? parseDate(maxDate) : undefined}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
        }) => (
          <DatePickerWrapper>
            <DatePickerSelectY
              value={getYear(date)}
              onChange={(e) => {
                changeYear(parseInt(e.target.value));
              }}
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </DatePickerSelectY>

            <DatePickerSelect
              value={months[getMonth(date)]}
              onChange={(e) => {
                changeMonth(months.indexOf(e.target.value));
              }}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </DatePickerSelect>
          </DatePickerWrapper>
        )}
      />
    </CalendarContainer>
  );
};

export default FormDatePicker;