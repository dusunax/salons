import ButtonCategory from "../../atoms/button/button-category";
import LabelCategory from "../../atoms/label/label-category";

import { categoriesMap } from "../../../utils/category";
import styled from "@emotion/styled";

const Categories = (props) => {
  let categories = [];
  for (const cate of categoriesMap) {
    categories.push(cate[1]);
  }

  const cateAllContent = {
    tag: "TagAll",
    salonCategory: "전체",
    color: "#111",
  };

  const buttonContainerClickHandler = () => {
    // 버튼 Toggle
    // ButtonCategory의 props "active"
    // SVG에 addClass "active"
  };

  return (
    <StButtonContainer onClick={buttonContainerClickHandler}>
      <ButtonCategory color={"#111"} active={false}>
        <LabelCategory category={cateAllContent} />
      </ButtonCategory>

      {categories.map((content) => (
        <ButtonCategory
          key={content.Categories + content.color}
          color={content.color}
        >
          <LabelCategory category={content} />
        </ButtonCategory>
      ))}
    </StButtonContainer>
  );
};

export default Categories;

const StButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.3rem;
`;
