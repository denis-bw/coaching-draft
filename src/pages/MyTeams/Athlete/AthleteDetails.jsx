import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const AthleteDetails = () => {
  const { athleteId } = useParams();

  return (
    <div>
      <h1>Деталі спортсмена {athleteId}</h1>
 
      <nav>
        <ul>
          <li>
            <NavLink to={`/athletes/${athleteId}/parents`} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Інформація про батьків
            </NavLink>
          </li>
          <li>
            <NavLink to={`/athletes/${athleteId}/history`} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Історія спортсмена
            </NavLink>
          </li>
        </ul>
      </nav>

      
    </div>
  );
};

export default AthleteDetails;
