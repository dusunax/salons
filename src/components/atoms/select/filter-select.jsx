const Filter = (props) => {
  const filterList = props.content;
  const filterName = props.content[0];

  return (
    <>
      <select name={filterName} id={filterName}>
        {filterList.map((filter) => {
          const filterOption = filter;
          const filterValue = filter;
          return <option value={filterValue}>{filterOption}</option>;
        })}
      </select>
    </>
  );
};

export default Filter;
