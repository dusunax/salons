import Filter from "../../atoms/select/filter-select";

import { locations, days } from "../../../utils/filter";

const Filters = ({ selectChangeHandler }) => {
  return (
    <>
      <Filter
        name={"locations"}
        placeholder={"위치"}
        content={locations}
        selectChangeHandler={selectChangeHandler}
      />
      <Filter
        name={"days"}
        placeholder={"요일"}
        content={days}
        selectChangeHandler={selectChangeHandler}
      />
    </>
  );
};

export default Filters;
