import { memo } from "react";

import styled from "@emotion/styled";

import Filters from "../../molecules/filters/filters";
import Categories from "../../molecules/categories/categories";

const MeetupsFiltersCategories = ({ handlerProps, filterProps }) => {
  const { checkboxChangeHandler, selectChangeHandler, buttonClickHandler } =
    handlerProps;
  const { categories, filterSelected } = filterProps;

  console.log(categories);

  return (
    <>
      <Categories
        buttonClickHandler={buttonClickHandler}
        categories={categories}
      />

      <StFilterContainer filterClosed={filterSelected.closed}>
        <div className="left">{/* <span>{itemCount}개의 모임</span> */}</div>

        <div className="right">
          <div className="soldout">
            <input
              type="checkbox"
              id="soldout_check"
              onChange={checkboxChangeHandler}
            />
            <label htmlFor="soldout_check">마감 모임 제외</label>
          </div>
          <Filters selectChangeHandler={selectChangeHandler} />
        </div>
      </StFilterContainer>
    </>
  );
};

export default memo(MeetupsFiltersCategories);

const StFilterContainer = styled.div`
  margin: 0.8rem 0 1rem;

  display: flex;
  justify-content: space-between;

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;

    cursor: pointer;

    ::after {
      content: "✔";
      position: absolute;
      left: 0;

      transform: translateX(-150%);
    }
  }

  .soldout {
    min-width: 80px;
    margin-right: 2px;
    padding-left: 1rem;

    font-size: 0.8rem;
    color: #666;

    display: flex;
    align-items: center;

    opacity: ${(props) => (props.filterClosed ? 0.5 : 1)};
    transition: opacity 0.2s;
    cursor: pointer;

    @media (max-width: 400px) {
      width: 100%;
      justify-content: flex-end;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem;

    @media (max-width: 400px) {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
