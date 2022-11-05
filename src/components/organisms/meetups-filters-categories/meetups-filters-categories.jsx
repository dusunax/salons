import { memo, useCallback, useEffect, useState } from "react";

import { categoriesMap } from "../../../utils/category";
import styled from "@emotion/styled";

import Filters from "../../molecules/filters/filters";
import Categories from "../../molecules/categories/categories";

const MeetupsFiltersCategories = (props) => {
  const [categories, setCategories] = useState([]);
  const [filterSelected, setFilterSelected] = useState({
    closed: false,
    location: null,
    day: null,
  });

  const getCategories = useCallback(() => {
    let cateLists = [
      {
        name: "all",
        tag: "TagAll",
        salonCategory: "전체",
        color: "#111",
        active: true,
        category: "categoryAll",
      },
    ];

    for (const cate of categoriesMap) {
      cateLists.push({ ...cate[1], active: false });
    }
    setCategories(cateLists);
  }, [categoriesMap]);

  const buttonClickHandler = (e) => {
    const target = e.target.closest("button");

    if (target) {
      const cate = target.dataset.cate;
      filterControl(cate);
    }
  };

  const filterControl = (cate) => {
    const newList = [...categories];
    let allActives = newList[0].active;

    for (const ct in newList) {
      const current = newList[ct];
      if (cate === "TagAll") {
        current.active = allActives;
      } else {
        newList[0].active = false;
      }

      if (current.tag === cate) {
        current.active = !current.active;
      }

      setCategories(newList);
    }
  };

  const selectChangeHandler = (e) => {
    if (e.target.name === "locations") {
      setFilterSelected({ ...filterSelected, location: e.target.value });
    } else if (e.target.name === "days") {
      setFilterSelected({ ...filterSelected, day: e.target.value });
    }
  };

  const checkboxChangeHandler = (e) => {
    setFilterSelected({ ...filterSelected, closed: e.target.checked });
  };

  useEffect(() => {
    getCategories();
  }, []);

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

  .soldout {
    min-width: 80px;
    margin-right: 2px;
    padding-left: 1rem;

    position: relative;

    font-size: 0.8rem;
    color: #666;

    display: flex;
    align-items: center;

    opacity: ${(props) => (props.filterClosed ? 0.5 : 1)};
    transition: opacity 0.2s;
    cursor: pointer;

    ::after {
      content: "✔";
      position: absolute;
      left: 0;
    }

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
