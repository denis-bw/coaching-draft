import React from 'react';
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

const AthleteListItem = ({ athlete }) => {
  return (
    <AthleteItemWrapper className="athlete-item" id={`athlete-${athlete.id}`}>
      <AthleteItemStyled
        to={`/athletes/${athlete.id}`}
      >
        <AthleteIconWrapper>
          <ProfileImageAthletes
            loading="lazy"
            src={athlete.photo || profilePlaceholder}
          />
        </AthleteIconWrapper>
        <AthleteInfo>
          <AthleteName>{athlete.name}</AthleteName>
          <TeamName>{athlete.teamName || '-'}</TeamName>
        </AthleteInfo>
        <ChevronWrapper>
          <RoadSignPointingRightIcon/>
        </ChevronWrapper>
      </AthleteItemStyled>
    </AthleteItemWrapper>
  );
};

export default AthleteListItem;