import styled from "@emotion/styled";

const LabelTag = (props) => {
  const name = props.content;

  return <StLabelTag>{name}</StLabelTag>;
};

export default LabelTag;

const StLabelTag = styled.div`
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

  background-color: #111;
  color: #fff;

  font-size: 0.6rem;
  font-weight: 400;
`;
