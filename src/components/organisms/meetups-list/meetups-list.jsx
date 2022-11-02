import MeetupItem from "../../molecules/item/meetup-item";

const MeetupsList = (props) => {
  const meetupsList = [0, 0];
  return (
    <ul>
      {meetupsList.map((meetups) => (
        <MeetupItem />
      ))}
    </ul>
  );
};

export default MeetupsList;
