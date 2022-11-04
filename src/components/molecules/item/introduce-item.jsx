import styled from "@emotion/styled";

import * as moment from "moment";
import "moment/locale/ko";

import LabelCategory from "../../atoms/label/label-category";

import { categoriesMap } from "../../../theme/category";

const IntroduceItem = ({ introduce }) => {
  let { introduction, salonCategory, createdAt } = introduce;
  const categoryInfo = categoriesMap.get(salonCategory[0]);

  moment.locale("ko");
  let localeCreatedAt = moment(createdAt).format("M월 D일");
  let localeFromNow = moment(createdAt).fromNow();

  return (
    <StIntroduceItem>
      <div className="wrap">
        <div className="top">
          <LabelCategory category={categoryInfo} />
          <span>{localeFromNow}</span>
        </div>
        <p>{introduction}</p>
      </div>
    </StIntroduceItem>
  );
};

export default IntroduceItem;

const StIntroduceItem = styled.li`
  flex: 0 0 calc(((100% - (1rem * 3)) / 4));

  @media (max-width: 700px) {
    flex: 0 0 calc((100% - (1rem * 2)) / 3);
  }

  @media (max-width: 400px) {
    flex: 0 0 calc((100% - (1rem)) / 2);
  }

  @media (max-width: 320px) {
    flex: 0 0 100%;
  }

  .wrap {
    height: 10rem;
    padding: 15px;

    border-radius: 10px;
    border: 1px solid #dadce0;

    box-sizing: border-box;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 0.8rem;
    color: #666;
  }

  p {
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.6;

    color: #111;

    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
