import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const StyledDatePicker = styled(DatePicker)`
  display: block;
  width: 100%;
  max-width: 100%; 
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme }) => theme.borderColor};
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
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 12px;
`;


export const DatePickerSelect = styled.select`
  padding: 6px 12px;
  width: 100px;
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

  option {
    background: ${({ theme }) => theme.ContainerBGColor};
    color: ${({ theme }) => theme.textBlack};
  }
`;


export const CalendarContainer = styled.div`
  .react-datepicker-wrapper{
    width: 100%;
  }
  .react-datepicker__month-container{
    border-radius: 14px;
  }
  .react-datepicker-popper{
    border-radius: 14px;
  }
  .react-datepicker {
    border-radius: 14px;
    border: 3px solid ${({ theme }) => theme.greenMain};
    background-color: ${({ theme }) => theme.ContainerBGColor};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.ContainerBGColor};
    border-radius: 14px 14px 0 0 ;
    border-bottom: 1px solid ${({ theme }) => theme.greenMain};
    padding-top: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select){
    border-radius: 14px 14px 0 0 ;
  }
  .react-datepicker__day-name{
    color: ${({ theme }) => theme.textBlack};
    font-size: 0.9rem;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover, .react-datepicker__month-text:not([aria-disabled=true]):hover, .react-datepicker__quarter-text:not([aria-disabled=true]):hover, .react-datepicker__year-text:not([aria-disabled=true]):hover  {
    border-radius: 50%;
    background-color:  ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
  .react-datepicker__day {
    color: ${({ theme }) => theme.textBlack};
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.darkGreen};
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
     border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.darkGreen};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.textBlack};
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.textGray};
  }

  .react-datepicker__triangle {
    display: none;
  }
`;