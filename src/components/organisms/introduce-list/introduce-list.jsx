import styled from "@emotion/styled";
import IntroduceItem from "../../molecules/item/introduce-item";

const IntroduceList = (props) => {
  const introduceList = [
    {
      introduction:
        "너는 나 나는 너 동화되는, 사람은 좋아하지만 복잡한 도심보다 자연을 동경하는 회사원",
      salonCategory: ["사랑과 연애"],
      createdAt: "2022-09-25T11:16:00+09:00",
    },
    {
      introduction: "뷰티&헬스 산업 외길을 걷고 싶은 화장품 브랜드 매니저.",
      salonCategory: ["일과 커리어"],
      createdAt: "2022-09-08T17:26:55+09:00",
    },
    {
      introduction: "삶을 최대한 흡수하고 싶은 카피라이터",
      salonCategory: ["자아와 관계"],
      createdAt: "2022-09-11T16:42:04+09:00",
    },
    {
      introduction: "급하지 않으며 하는일 대충 하지만 결과는 만족이 나왔으면…",
      salonCategory: ["음악과 OST"],
      createdAt: "2022-10-12T12:37:57+09:00",
    },
  ];

  return (
    <StIntroduceList>
      {introduceList.map((introduce) => {
        return (
          <IntroduceItem key={introduce.introduction} introduce={introduce} />
        );
      })}
    </StIntroduceList>
  );
};

export default IntroduceList;

const StIntroduceList = styled.ul`
  display: flex;
  gap: 1rem;

  overflow: hidden;
  margin-bottom: 2.5rem;
`;
