import React from 'react'
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

const TeamListItem = ({ team, isVisible }) => {
  return (
    <TeamItemWrapper isVisible={isVisible} id={`team-${team.id}`}>
      <TeamItemStyled
        to={`/teams/${team.id}`}
        isVisible={isVisible}
      >
        <TeamIconWrapper>
          <ProfileImageTeams
            loading="lazy"
            src={PlaceholderTeam}
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