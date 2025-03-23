import React from 'react';
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

const TeamListItem = ({ team }) => {
  return (
    <TeamItemWrapper data-team-item>
      <TeamItemStyled to={`/teams/${team.id}`}>
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