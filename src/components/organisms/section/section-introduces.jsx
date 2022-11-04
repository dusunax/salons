import { useEffect, useState } from "react";

import { API_URL } from "../../../config/index";

import TitleThree from "../../atoms/title/title-h3";
import IntroduceList from "../introduce-list/introduce-list";

const SectionIntroduces = (props) => {
  const [introduceList, setIntroduceList] = useState([]);
  const [showAtOnce, setShowAtOnce] = useState(4);
  const [loading, setLoading] = useState(true);

  const fetchIntroduceList = async () => {
    try {
      let response = await fetch(API_URL + "/introductions").then((res) =>
        res.json()
      );

      if (response.success) {
        const fetchedList = response.data.introductions;
        setIntroduceList((prev) => [...prev, ...fetchedList]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const checkShowAtOnce = (count) => {
    setShowAtOnce(count);
  };

  const introduceRandomButtonClickHandler = (count, list) => {
    const shiftCount = count;
    const newList = [...list];

    newList.splice(0, shiftCount);

    setIntroduceList(newList);
    if (newList.length <= count) fetchIntroduceList();
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
      fetchIntroduceList();
    }
    checkShowAtOnce(showAtOnce);
  }, [loading, showAtOnce]);

  return (
    <section className="introduces">
      <TitleThree>
        참여 중인 멤버들의
        <div className="show_at_sm" /> 한 줄 소개{" "}
        <button
          onClick={() =>
            introduceRandomButtonClickHandler(showAtOnce, introduceList)
          }
        >
          랜덤
        </button>
      </TitleThree>
      <IntroduceList introduceList={introduceList} showAtOnce={showAtOnce} />
    </section>
  );
};

export default SectionIntroduces;
