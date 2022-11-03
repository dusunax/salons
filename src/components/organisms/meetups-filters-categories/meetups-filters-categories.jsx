import Filters from "../../molecules/filters/filters";
import Categories from "../../molecules/categories/categories";
import styled from "@emotion/styled";

const MeetupsFiltersCategories = (props) => {
  const itemCount = 4;
  const filterSoldoutChangeHandler = () => {};

  return (
    <>
      <Categories />

      <StFilterContainer>
        <span>{itemCount}개의 모임</span>

        <div className="right">
          <div>
            <input
              type="checkbox"
              id="soldout_check"
              onChange={filterSoldoutChangeHandler}
            />
            <label htmlFor="soldout_check">
              <span>✔</span>
              마감 모임 제외
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

  .right {
    display: flex;
    gap: 0.5rem;
  }
`;
