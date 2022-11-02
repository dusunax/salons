import Filter from "../../atoms/select/filter-select";

const Filters = (props) => {
  const filterA = ["안녕", "월드"];
  const filterB = [0, 1, 2, 3, 4];
  return (
    <>
      <Filter content={filterA} />
      <Filter content={filterB} />
    </>
  );
};

export default Filters;
