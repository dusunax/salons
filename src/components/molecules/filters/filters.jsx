import Filter from "../../atoms/select/filter-select";

import { locations, days } from "../../../utils/filter";

const Filters = ({ selectChangeHandler }) => {
  return (
    <>
      <Filter
        name={"locations"}
        content={locations}
        selectChangeHandler={selectChangeHandler}
      />
      <Filter
        name={"days"}
        content={days}
        selectChangeHandler={selectChangeHandler}
      />
    </>
  );
};

export default Filters;
