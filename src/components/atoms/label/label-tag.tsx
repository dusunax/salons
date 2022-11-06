import styled from "@emotion/styled";

import { Tag } from "../../../models/modules";

const LabelTag = ({
  tag,
  categoryColor,
}: {
  tag: Tag;
  categoryColor: string;
}) => {
  const tagText = tag.text;
  const tagColor = tag.color ? tag.color : categoryColor;

  return <StLabelTag tagColor={tagColor}>{tagText}</StLabelTag>;
};

export default LabelTag;

const StLabelTag = styled.div<{ tagColor: string }>`
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

  background-color: ${(props) => props.tagColor};
  color: #fff;

  font-size: 0.6rem;
  font-weight: 400;
`;
