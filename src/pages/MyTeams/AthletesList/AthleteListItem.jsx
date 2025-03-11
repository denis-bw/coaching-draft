import React, { useState, useRef, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import { 
  AthleteInfo, 
  AthleteName, 
  TeamName, 
  ChevronWrapper, 
  RoadSignPointingRightIcon,
  ProfileImageAthletes,
  AthleteIconWrapper,
  AthleteItemWrapper,
  AthleteItemStyled
} from './AthletesList.styled';
import profilePlaceholder from "../../../assets/PlaceholderProfile.png";


const AthleteListItem = ({ athlete, isVisible }) => {
  return (
    <AthleteItemWrapper isVisible={isVisible} id={`athlete-${athlete.id}`}>
      <AthleteItemStyled 
        to={`/athletes/${athlete.id}`}
        isVisible={isVisible}
      >
        <AthleteIconWrapper>
          <ProfileImageAthletes
            loading="lazy"
            src={profilePlaceholder}
          />
        </AthleteIconWrapper>
        <AthleteInfo>
          <AthleteName>{athlete.name}</AthleteName>
          <TeamName>{athlete.team || '-'}</TeamName>
        </AthleteInfo>
        <ChevronWrapper>
          <RoadSignPointingRightIcon/>
        </ChevronWrapper>
      </AthleteItemStyled>
    </AthleteItemWrapper>
  );
};

export default AthleteListItem