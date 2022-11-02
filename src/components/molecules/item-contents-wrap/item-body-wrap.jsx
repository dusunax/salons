import LabelCategory from "../../atoms/label/label-category";

const ItemBodyWrap = (props) => {
  const { meetupName, date, day, location } = {
    meetupName: "모임명",
    date: "11월 11일",
    day: "일요일",
    location: "중랑",
  };
  return (
    <div>
      <LabelCategory />

      <strong>{meetupName}</strong>

      <div>
        <span>{date}</span> · <span>{day}</span> · <span>{location}</span>
      </div>
    </div>
  );
};

export default ItemBodyWrap;
