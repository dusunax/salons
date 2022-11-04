import { memo } from "react";
import styled from "@emotion/styled";

import MeetupItem from "../../molecules/item/meetup-item";

const MeetupsList = ({ meetupsList }) => {
  const meetups = meetupsList;
  return (
    <StUList>
      {meetups?.map((meetup, idx) => {
        if (idx > 1) return;
        return <MeetupItem key={meetup.id + meetup.title} meetup={meetup} />;
      })}
    </StUList>
  );
};

export default memo(MeetupsList);

const StUList = styled.ul`
  margin-bottom: 1.5rem;

  display: flex;
  flex-flow: wrap;
  gap: 1rem;
`;
