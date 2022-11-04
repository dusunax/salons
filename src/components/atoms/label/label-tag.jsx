import styled from "@emotion/styled";

const LabelTag = ({ tag, categoryColor }) => {
  const tagText = tag.text;
  const tagColor = tag.color ? tag.color : categoryColor;

  return <StLabelTag tagColor={tagColor}>{tagText}</StLabelTag>;
};

export default LabelTag;

const StLabelTag = styled.div`
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

  background-color: ${(props) => props.tagColor};
  color: #fff;

  font-size: 0.6rem;
  font-weight: 400;
`;
