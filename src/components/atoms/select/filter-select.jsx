import styled from "@emotion/styled";

const Filter = (props) => {
  const filterList = props.content;
  const filterName = props.content[0];

  return (
    <StSelect name={filterName} id={filterName}>
      {filterList.map((filter) => {
        const filterOption = filter;
        const filterValue = filter;
        return (
          <option key={filterValue + filterOption} value={filterValue}>
            {filterOption}
          </option>
        );
      })}
    </StSelect>
  );
};

export default Filter;

const StSelect = styled.select`
  min-width: 7rem;
  padding: 0.4rem 0.5rem;
  border-radius: 0.5rem;

  font-size: 0.7rem;
  color: #666;

  @media (max-width: 400px) {
    flex: 1;
    min-width: auto;
  }
`;
