import styled from "@emotion/styled";
import * as tagIcons from "../../../../public/icons/TagIcons";

const LabelCategory = ({ category }) => {
  if (!category) return;
  const { name, salonCategory, color = "#111" } = category;

  return (
    <StLabel fillColor={color}>
      {tagIcons[name]("#111")}
      <span>{salonCategory}</span>
    </StLabel>
  );
};

export default LabelCategory;

const StLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 0.8rem;

  svg {
    fill: ${(props) => props.fillColor};
  }

  svg.active {
    fill: #fff;
    font-weight: 500;
  }
`;
