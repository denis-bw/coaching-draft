import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const AthleteDetails = () => {
  const { athleteId } = useParams();

  return (
    <div>
      <h1>Деталі спортсмена {athleteId}</h1>
 

      
    </div>
  );
};

export default AthleteDetails;
