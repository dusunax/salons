import styled from "@emotion/styled";
import LabelCategory from "../../atoms/label/label-category";

const ItemBodyWrap = (props) => {
  const { meetupName, date, day, location } = {
    meetupName: "모임명",
    date: "11월 11일",
    day: "일요일",
    location: "중랑",
  };

  return (
    <StItemBodyWrap>
      <LabelCategory />

      <strong>{meetupName}</strong>

      <div className="bottom">
        <span>{date}</span> · <span>{day}</span> · <span>{location}</span>
      </div>
    </StItemBodyWrap>
  );
};

export default ItemBodyWrap;

const StItemBodyWrap = styled.div`
  padding: 0.7rem 0.9rem 1rem;

  .bottom {
    margin-top: 0.5rem;

    display: flex;
    justify-content: space-between;

    font-size: 13px;

    color: #666;
  }
`;
