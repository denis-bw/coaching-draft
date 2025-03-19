import { useState } from "react";
import { getYear, getMonth, setYear, setMonth, isValid } from "date-fns";
import { uk } from "date-fns/locale";
import { 
  StyledDatePicker, 
  DatePickerWrapper, 
  DatePickerSelect,
  DatePickerSelectY,
  CalendarContainer,
} from "./CustomDatePicker.styled"; 


const range = (start, end, step = 1) => {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

export const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(() => {
    try {
      if (selectedDate) {
        const date = new Date(selectedDate);
        
        return (isValid(date) && !isNaN(date.getTime()) && date <= currentDate) ? date : null;
      }
      return null;
    } catch (e) {
      console.error("Invalid date format:", selectedDate);
      return null;
    }
  });

  const years = range(1900, getYear(currentDate));
  const months = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
  ];

  const handleDateChange = (date) => {
    try {
      if (date && isValid(date) && !isNaN(date.getTime())) {
        const isoDate = date.toISOString();
        setStartDate(date);
        onDateChange(isoDate);
      } else {
        setStartDate(null);
        onDateChange(null);
      }
    } catch (e) {
      console.error("Error handling date change:", e);
      setStartDate(null);
      onDateChange(null);
    }
  };

  const handleYearChange = (value) => {
    const newDate = setYear(startDate, parseInt(value));
    handleDateChange(newDate);
  };

  const handleMonthChange = (value) => {
    const monthIndex = months.indexOf(value);
    const newDate = setMonth(startDate, monthIndex);
    handleDateChange(newDate);
  };

  return (
    <CalendarContainer>
      <StyledDatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="Оберіть дату"
        locale={uk}
        maxDate={currentDate}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
        }) => (
          <DatePickerWrapper>
            <DatePickerSelectY 
              value={getYear(date)} 
              onChange={(e) => {
                const value = e.target.value;
                changeYear(value);
                handleYearChange(value);
              }}
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </DatePickerSelectY>

            <DatePickerSelect 
              value={months[getMonth(date)]} 
              onChange={(e) => {
                const value = e.target.value;
                changeMonth(months.indexOf(value));
                handleMonthChange(value);
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