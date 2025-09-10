import React, { useState, useEffect } from 'react';
import {
  TeamInfo,
  TeamName,
  ChevronWrapper,
  RoadSignPointingRightIcon,
  ProfileImageTeams,
  TeamIconWrapper,
  TeamItemWrapper,
  TeamItemStyled
} from './TeamsList.styled';
import PlaceholderTeam from "../../../assets/PlaceholderTeam.jpg";
import imageNotFound from "../../../assets/ImageNotFound.png"; 

const TeamListItem = ({ team }) => {
  const [imageStatus, setImageStatus] = useState({ loaded: false, error: false });
  
  useEffect(() => {
    if (team.logo) {
      const img = new Image();
      img.src = team.logo;
      
      img.onload = () => {
        setImageStatus({ loaded: true, error: false });
      };
      
      img.onerror = () => {
        setImageStatus({ loaded: true, error: true });
        console.log(`Зображення для команди ${team.id} не знайдено.`);
      };
    }
  }, [team]);
  
const getImageSource = () => {
  if (!team.logo) return PlaceholderTeam;
  if (imageStatus.error) return imageNotFound; 
  return team.logo;
};

  const handleImageError = () => {
    setImageStatus({ loaded: true, error: true });
  };

  return (
    <TeamItemWrapper data-team-item>
      <TeamItemStyled to={`/teams/${team.id}`}>
        <TeamIconWrapper>
          <ProfileImageTeams
            loading="lazy"
            src={getImageSource()}
            alt={`Логотип команди ${team.name}`}
            onError={handleImageError}
          />
        </TeamIconWrapper>
        <TeamInfo>
          <TeamName>{team.name}</TeamName>
        </TeamInfo>
        <ChevronWrapper>
          <RoadSignPointingRightIcon/>
        </ChevronWrapper>
      </TeamItemStyled>
    </TeamItemWrapper>
  );
};

export default TeamListItem;