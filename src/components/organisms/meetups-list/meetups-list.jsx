import styled from "@emotion/styled";
import MeetupItem from "../../molecules/item/meetup-item";

const MeetupsList = (props) => {
  const meetupsList = [0, 0, 0, 0];
  return (
    <StUList>
      {meetupsList.map((meetups) => (
        <MeetupItem />
      ))}
    </StUList>
  );
};

export default MeetupsList;

const StUList = styled.ul`
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 1rem;
`;
