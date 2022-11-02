import LabelCategory from "../../atoms/label/label-category";

const IntroduceItem = (props) => {
  const imageUrl = "카테고리 주소";
  const imageAlt = "ㅇ";

  return (
    <li>
      <LabelCategory />
      <>날짜</>
      <>소개</>
    </li>
  );
};

export default IntroduceItem;
