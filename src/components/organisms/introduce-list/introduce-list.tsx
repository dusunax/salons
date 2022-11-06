import styled from "@emotion/styled";

import IntroduceItem from "../../molecules/item/introduce-item";

import { Introduce } from "../../../models/modules";

const IntroduceList = ({
  introduceList,
  showAtOnce,
}: {
  introduceList: Introduce[];
  showAtOnce: number;
}) => {
  return (
    <StIntroduceList>
      {introduceList.map((introduce, idx) => {
        if (idx > showAtOnce) return;

        return (
          <IntroduceItem key={introduce.introduction} introduce={introduce} />
        );
      })}
    </StIntroduceList>
  );
};

export default IntroduceList;

const StIntroduceList = styled.ul`
  min-height: 10rem;

  display: flex;
  gap: 1rem;

  overflow: hidden;
  margin-bottom: 2.5rem;

  @media (max-width: 500px) {
    min-height: 12rem;
  }
`;
