import React, { useState } from 'react';
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
import imageNotFound from "../../../assets/ImageNotFound.png"; 

const AthleteListItem = ({ athlete }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <AthleteItemWrapper className="athlete-item" id={`athlete-${athlete.id}`}>
      <AthleteItemStyled
        to={`/athletes/${athlete.id}`}
      >
        <AthleteIconWrapper>
          <ProfileImageAthletes
            loading="lazy"
            src={imageError ? imageNotFound : (athlete.photo || profilePlaceholder)}
            onError={handleImageError}
            alt={athlete.name}
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