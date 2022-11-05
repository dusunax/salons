import { memo } from "react";

import styled from "@emotion/styled";

import MeetupItem from "../../molecules/item/meetup-item";

const MeetupsList = ({ meetupsList, sortOpt }) => {
  const meetups = meetupsList;

  return (
    <StUList>
      {meetups?.map((meetup) => {
        const filterTagList = meetup.filter;

        if (sortOpt) {
          const sort = meetup.sortStrings;

          switch (sortOpt) {
            case "closedMeetup":
              if (sort.includes("모집 마감")) return;
              break;
            case "openMeetup":
              if (!sort.includes("모집 마감")) return;
              break;
            default:
              break;
          }
        }

        return (
          <MeetupItem
            key={meetup.id + meetup.title}
            meetup={meetup}
            filterTagList={filterTagList}
          />
        );
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
