import styled from "@emotion/styled";

const ButtonCategory = (props) => {
  return (
    <StButton color={props.color} active={props.active}>
      {props.children}
    </StButton>
  );
};

export default ButtonCategory;

const StButton = styled.button`
  padding: 0.4rem 0.7rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;

  border: 1px solid ${(props) => (props.color ? props.color : "#dadce0")};

  transition: all 0.2s;

  background-color: ${(props) => (props.active ? props.color : "#fff")};
  color: ${(props) => (props.active ? "#fff !important" : "#666")};
  font-weight: ${(props) => (props.active ? "500" : "400")};
`;
