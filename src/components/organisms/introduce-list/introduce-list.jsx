import IntroduceItem from "../../molecules/item/introduce-item";

const IntroduceList = (props) => {
  const introduceList = [0, 0, 0, 0];
  return (
    <ul>
      {introduceList.map((meetups) => {
        return <IntroduceItem />;
      })}
    </ul>
  );
};

export default IntroduceList;
