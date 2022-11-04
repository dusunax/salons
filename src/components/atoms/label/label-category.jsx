import styled from "@emotion/styled";
import * as tagIcons from "../../../../public/icons/TagIcons";

const LabelCategory = ({ category }) => {
  if (!category) return;
  const { tag, salonCategory, color = "#111" } = category;

  return (
    <StLabel fillColor={color}>
      {tagIcons[tag]("#111")}
      <span>{salonCategory}</span>
    </StLabel>
  );
};

export default LabelCategory;

const StLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 0.7rem;
  color: #666;

  svg {
    fill: ${(props) => props.fillColor};
  }

  svg.active {
    fill: #fff;
    font-weight: 500;
  }
`;
