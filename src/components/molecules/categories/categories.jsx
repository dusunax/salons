import styled from "@emotion/styled";
import { Category } from "../../../models/category";

import ButtonCategory from "../../atoms/button/button-category";
import LabelCategory from "../../atoms/label/label-category";

const Categories = (props) => {
  const { buttonClickHandler, categories } = props;

  return (
    <StButtonContainer onClick={buttonClickHandler}>
      {categories.map((content, idx) => {
        return (
          <ButtonCategory
            key={content.category + content.color}
            color={content.color}
            dataCate={content.tag}
            active={content.active}
          >
            <LabelCategory category={content} />
          </ButtonCategory>
        );
      })}
    </StButtonContainer>
  );
};

export default Categories;

const StButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.3rem;
`;
