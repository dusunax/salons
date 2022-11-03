import styled from "@emotion/styled";
import * as tagIcons from "../../../../public/icons/TagIcons";

const LabelCategory = ({ category }) => {
  if (!category) return;
  const { name, salonCategory, color } = category;

  return (
    <StLabel fillColor={color}>
      {tagIcons[name]("#000")}
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
  color: #666;

  svg {
    fill: ${(props) => props.fillColor};
  }

  svg.active {
    color: #fff;
    font-weight: 500;
  }
`;
