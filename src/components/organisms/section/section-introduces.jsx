import TitleThree from "../../atoms/title/title-h3";
import IntroduceList from "../introduce-list/introduce-list";

const SectionIntroduces = (props) => {
  return (
    <section className="introduces">
      <TitleThree>
        참여 중인 멤버들의
        <div className="show_at_sm" /> 한 줄 소개 <button>랜덤</button>
      </TitleThree>
      <IntroduceList />
    </section>
  );
};

export default SectionIntroduces;
