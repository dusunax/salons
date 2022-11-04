import Filters from "../../molecules/filters/filters";
import Categories from "../../molecules/categories/categories";
import styled from "@emotion/styled";

const MeetupsFiltersCategories = (props) => {
  const filterSoldoutChangeHandler = () => {};

  return (
    <>
      <Categories />

      <StFilterContainer>
        <div className="left">{/* <span>{itemCount}개의 모임</span> */}</div>

        <div className="right">
          <div className="soldout">
            <input
              type="checkbox"
              id="soldout_check"
              onChange={filterSoldoutChangeHandler}
            />
            <label htmlFor="soldout_check">
              <span>✔</span> 마감 모임 제외
            </label>
          </div>
          <Filters />
        </div>
      </StFilterContainer>
    </>
  );
};

export default MeetupsFiltersCategories;

const StFilterContainer = styled.div`
  margin: 0.8rem 0 1rem;

  display: flex;
  justify-content: space-between;

  .soldout {
    min-width: 100px;
    margin-right: 2px;

    font-size: 0.8rem;
    color: #666;

    display: flex;

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
      justify-content: space-between;
    }
  }
`;
