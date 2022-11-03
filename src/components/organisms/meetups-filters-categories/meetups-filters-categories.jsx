import Filters from "../../molecules/filters/filters";
import Categories from "../../molecules/categories/categories";

const MeetupsFiltersCategories = (props) => {
  const itemCount = 4;
  return (
    <>
      <Categories />

      <div>
        <span>{itemCount}개의 모임</span>

        <div>
          <input type="checkbox" id="soldout_check" checked />
          <label htmlFor="soldout_check">
            <span>✔</span>
            마감 모임 제외
          </label>
        </div>

        <Filters />
      </div>
    </>
  );
};

export default MeetupsFiltersCategories;
