import styled from "@emotion/styled";

import * as moment from "moment";
import "moment/locale/ko";

import LabelCategory from "../../atoms/label/label-category";

const ItemBodyWrap = (props) => {
  const { title, tags, sessions, salonCategory, color, tag } = props.bodyProps;
  const { meetupTitle, date, day, location } = {
    meetupTitle: title,
    date: sessions[0].date,
    day: tags.dayOfWeek[0],
    location: tags.region[0],
  };
  const category = { tag, salonCategory, color };

  moment.locale("ko");
  let localeCreatedAt = moment(date).format("M월 D일");

  return (
    <StItemBodyWrap>
      <div>
        <LabelCategory category={category} />
        <p className="title">{meetupTitle}</p>
      </div>

      <div className="bottom">
        <span>{localeCreatedAt}</span> · <span>{day}</span> ·{" "}
        <span>{location}</span>
      </div>
    </StItemBodyWrap>
  );
};

export default ItemBodyWrap;

const StItemBodyWrap = styled.div`
  flex: 1 1 auto;
  padding: 0.7rem 0.8rem 1rem;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  word-break: keep-all;

  .title {
    margin-top: 0.4rem;

    color: #222;

    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.7;
  }

  .bottom {
    margin-top: 0.5rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    font-size: 13px;

    color: #666;
  }
`;
