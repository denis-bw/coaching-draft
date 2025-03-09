import React from 'react';
import { NavLink } from 'react-router-dom';
  import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react'
  
const MonthlyCalendar = () => {
  
  const { setTitle } = useOutletContext();
  
    useEffect(() => {
      setTitle("Календар");
    }, [setTitle]);
      
  return (
    <div>
      <h1>Календар за місяць</h1>
      <NavLink to="/calendar/week">Перейти до тижневого календаря/</NavLink>
      <NavLink to="/calendar/event">Перейти до подій/</NavLink>
    </div>
  );
};

export default MonthlyCalendar;
