import { useEffect, useState, useCallback, useRef } from "react";
import Head from "next/head";

import { API_URL } from "../../config/index";
import { filteringMeetup } from "../../utils/meetupFilter";
import { categoriesMap } from "../../utils/category";

import SectionMeetupsList from "../../components/organisms/section/section-meetups-list";
import SectionIntroduce from "../../components/organisms/section/section-introduces";
import SectionTitle from "../../components/molecules/titles/section-title";
import Banner from "../../components/atoms/banner/banner";
import ContentsWrap from "../../components/templates/shared/contents-wrap";

import commingSoonImage from "../../../public/banners/coming_soon_banner.jpg";

// textContent
const bannerData = {
  imageUrl: commingSoonImage.src,
  imageAlt: "오픈 예정 모임 알림 신청하기",
  height: "3",
};

const sectionTitleData = {
  title: "정기 모임",
  text: `3개월 동안 네 번 만나는 정기 모임입니다.\n12명의 새로운 사람들과 대화와 취향을 나눠요.`,
};

const sectionMiddleData = {
  title: "진행중인 정기 모임",
  text: `이미 시작된 정기 모임입니다.\n시작된 모임의 2회차부터 놀러가기가 가능합니다!`,
};

export default function SalonsPage() {
  const [meetupsList, setMeetupsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterSelected, setFilterSelected] = useState({
    closed: false,
    location: null,
    day: null,
  });
  const meetupsUList = useRef();
  const [listEmpty, setListEmpty] = useState(false);

  // 각 리스트 컴포넌트 config
  const listOptionTop = {
    filterKeywords: ["closedMeetup"],
    filterSection: true,
  };
  const listOptionBottom = {
    filterKeywords: ["openMeetup"],
    filterSection: false,
    ...sectionMiddleData,
  };

  /******************************/
  /******* Meetups Fetch ********/
  /******************************/

  /** Meetups 리스트 fetch 핸들러 */
  const fetchHandler = async () => {
    const crruentList = await fetchMeetupsList();
    const addSortList = await addSort(crruentList);
    setMeetupsList(addSortList);
  };

  /** Meetups api get요청, return: Meetup[] */
  const fetchMeetupsList = async () => {
    try {
      let response = await fetch(API_URL + "/meetups").then((res) =>
        res.json()
      );

      if (response.success) {
        const fetchedList = response.data.meetups;
        return fetchedList;
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  /** 각 Meetup에 sort내용을 추가 */
  const addSort = (fetchedList) => {
    for (const x in fetchedList) {
      let sortTags;
      let sortStrings = [];

      sortTags = filteringMeetup(fetchedList[x]);
      fetchedList[x]["filter"] = filteringMeetup(fetchedList[x]);

      for (const idx in sortTags) {
        sortStrings.push(sortTags[idx].text);
      }
      fetchedList[x]["sortStrings"] = sortStrings;
    }

    return fetchedList;
  };

  /** 카테고리 state 기본값 설정 */
  const getCategories = useCallback(() => {
    let cateLists = [
      {
        name: "all",
        tag: "TagAll",
        salonCategory: "전체",
        color: "#111",
        active: true,
        category: "categoryAll",
      },
    ];

    for (const cate of categoriesMap) {
      cateLists.push({ ...cate[1], active: false });
    }
    setCategories(cateLists);
  }, [categoriesMap]);

  /***************************/
  /******* 필터링 기능 ********/
  /***************************/

  /** 카테고리 state 변경되는 곳 */
  const filterControl = (cate) => {
    const newList = [...categories];
    let allActives = newList[0].active;

    for (const ct in newList) {
      const current = newList[ct];
      if (cate === "TagAll") {
        current.active = allActives;
      } else {
        newList[0].active = false;
      }

      if (current.tag === cate) {
        current.active = !current.active;
      }

      setCategories(newList);
    }
  };

  // 핸들러 //

  /** onChange: 위치&요일 select  */
  const selectChangeHandler = (e) => {
    if (e.target.name === "locations") {
      setFilterSelected({ ...filterSelected, location: e.target.value });
    } else if (e.target.name === "days") {
      setFilterSelected({ ...filterSelected, day: e.target.value });
    }
  };

  /** onChange: 마감 모임 제외 checkbox  */
  const checkboxChangeHandler = (e) => {
    setFilterSelected({ ...filterSelected, closed: e.target.checked });
  };

  /** onClick: 카테고리 버튼 클릭 */
  const buttonClickHandler = (e) => {
    const target = e.target.closest("button");

    if (target) {
      const cate = target.dataset.cate;
      filterControl(cate);
    }
  };

  /** ref 리스트의 아이템 갯수 확인(사용x) */
  const checkItemsLength = () => {
    if (meetupsUList.current.children.length === 0) {
      setListEmpty(true);
    } else {
      setListEmpty(false);
    }
  };

  // 전달할 props객체
  const handlerProps = {
    checkboxChangeHandler,
    selectChangeHandler,
    buttonClickHandler,
  };

  const filterProps = {
    categories,
    filterSelected,
    meetupsUList,
    listEmpty,
  };

  useEffect(() => {
    fetchHandler();
    getCategories();
  }, []);

  return (
    <div>
      <Head>
        <title>정기모임</title>
      </Head>

      <Banner bannerProps={bannerData} />

      <ContentsWrap>
        <SectionTitle titleProps={sectionTitleData} />

        {/* 자기소개 */}
        {/* <SectionIntroduce /> */}

        {/* 모집 중인 모임 */}
        <SectionMeetupsList
          listOption={listOptionTop}
          meetupsList={meetupsList}
          handlerProps={handlerProps}
          filterProps={filterProps}
        />

        {/* 진행 중인 모임 */}
        <SectionMeetupsList
          listOption={listOptionBottom}
          meetupsList={meetupsList}
          handlerProps={handlerProps}
          filterProps={filterProps}
        />
      </ContentsWrap>
    </div>
  );
}
