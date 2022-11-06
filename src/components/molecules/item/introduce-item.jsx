import styled from "@emotion/styled";

import * as moment from "moment";
import "moment/locale/ko";

import LabelCategory from "../../atoms/label/label-category";

import { categoriesMap } from "../../../utils/category";

const IntroduceItem = ({ introduce }) => {
  let { introduction, salonCategory, createdAt } = introduce;
  const categoryInfo = categoriesMap.get(salonCategory[0]);
  //
  moment.locale("ko");
  let localeFromNow = moment(createdAt).fromNow();

  return (
    <StIntroduceItem>
      <div className="wrap">
        <div className="top">
          <LabelCategory category={categoryInfo} />
          <span className="createdAt">{localeFromNow}</span>
        </div>
        <p>{introduction}</p>
      </div>
    </StIntroduceItem>
  );
};

export default IntroduceItem;

const StIntroduceItem = styled.li`
  flex: 0 0 calc(((100% - (1rem * 3)) / 4));

  @media (max-width: 800px) {
    flex: 0 0 calc((100% - (1rem * 2)) / 3);
  }

  @media (max-width: 500px) {
    flex: 0 0 calc((100% - (1rem)) / 2);
    .createdAt {
      width: 100%;
      text-align: right;
    }
    .wrap {
      height: 12rem !important;
    }
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

    gap: 2px;

    flex-wrap: wrap;
    word-break: keep-all;
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
    word-break: keep-all;
    word-wrap: break-word;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
