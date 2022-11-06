import { useEffect, useState, useCallback, useRef } from "react";
import Head from "next/head";
import _ from "lodash";

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
  // MeetupsList & 필터링
  const [meetupsList, setMeetupsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterSelected, setFilterSelected] = useState({
    closed: false,
    location: null,
    day: null,
  });

  // 무한스크롤
  const meetupsListTop = useRef();
  const meetupEnd = useRef();
  const [isListEnd, setIsListEnd] = useState(false);

  // 그 외
  const [isListEmpty, setisListEmpty] = useState(false);

  // 각 리스트 컴포넌트 config
  const listOptionTop = {
    filterKeywords: ["closedMeetup"],
    filterSection: true,
    pagenation: true,
  };
  const listOptionBottom = {
    filterKeywords: ["openMeetup"],
    filterSection: false,
    pagenation: false,
    ...sectionMiddleData,
  };

  /******************************/
  /******* Meetups Fetch ********/
  /******************************/

  /** Meetups 리스트 fetch 핸들러 (버그있음) */
  const fetchHandler = async (meetupsList, setMeetupsList) => {
    // console.log(
    //   "핸들러 실행",
    //   meetupsList.length,
    //   meetupsListTop.current.children.length
    // );
    const crruentList = await fetchMeetupsList(meetupsList.length);
    const addSortList = await addSort(crruentList);
    const newList = [...meetupsList, ...addSortList];

    const set = new Set(newList);
    const uniqueList = [...set];

    if (meetupsList.length < uniqueList.length) {
      setMeetupsList(uniqueList);
    }

    // console.log("기존 값");
    // console.log(meetupsList);

    // console.log("받아온 값");
    // console.log(addSortList);

    // console.log("새로 저장할 값");
    // console.log(uniqueList);
  };

  /** Meetups api get요청, return: Meetup[] */
  const fetchMeetupsList = async (offset) => {
    const api = `${API_URL}/meetups?offset=${offset}`;

    try {
      let response = await fetch(api).then((res) => res.json());

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
      // sortTags: {text:string, color: string}[]
      let sortStrings = [];
      // sortStrings: string[]

      sortTags = filteringMeetup(fetchedList[x]);
      fetchedList[x]["filter"] = sortTags;

      for (const idx in sortTags) {
        sortStrings.push(sortTags[idx].text);
      }
      fetchedList[x]["sortStrings"] = sortStrings;
    }

    return fetchedList;
  };

  /** 카테고리 state 기본값 설정 */
  const setDefaultCategories = useCallback(() => {
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

  /*****************************/
  /******* 아이템 리스트 ********/
  /*****************************/

  /** ref 리스트의 아이템 갯수 확인(사용x) */
  const checkItemsLength = () => {
    if (meetupsListTop.current.children.length === 0) {
      setisListEmpty(true);
    } else {
      setisListEmpty(false);
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
    listRef: meetupsListTop,
    itemEndRef: meetupEnd,
    isListEmpty,
  };

  /** 마지막 아이템에 ref적용 */
  const setLastItemRef = (listRef, itemEndRef) => {
    const targets = listRef?.current.children;
    console.log(targets === false);

    if (targets.length === 0) {
      console.log("hi");
    } else {
      const lastIdx = targets.length - 1;
      const lastItem = targets[lastIdx];

      console.log(itemEndRef.current);

      console.log(lastItem?.classList);
      console.log(listRef.current.children, lastIdx, lastItem);
    }
  };

  /**  */
  const _scrollHandler = _.throttle((ref, isListEnd) => {
    if (isListEnd) return;

    const { innerHeight } = window;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const { offsetTop, offsetHeight } = ref.current;

    if (!(offsetTop > 0) || !(scrollTop > 0)) return;

    const scroll_bot = innerHeight + scrollTop;
    const offset_bot = offsetTop + offsetHeight;
    const gap = 0.6;
    const threshhold = innerHeight * gap;

    // console.log(offset_bot, scroll_bot);
    if (scroll_bot > offset_bot - threshhold) {
      // fetchHandler(meetupsList, setMeetupsList);
      // console.log("요청");
    }
  }, 500);

  useEffect(() => {
    if (!(meetupsListTop.current.children.length > 0))
      fetchHandler(meetupsList, setMeetupsList);
    setDefaultCategories();

    if (meetupsListTop.current !== null) {
      window.addEventListener("scroll", () =>
        _scrollHandler(meetupsListTop, isListEnd)
      );
      return () =>
        window.removeEventListener("scroll", () =>
          _scrollHandler(meetupsListTop, isListEnd)
        );
    }
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
        {/* <SectionMeetupsList
          listOption={listOptionBottom}
          meetupsList={meetupsList}
          handlerProps={handlerProps}
          filterProps={filterProps}
        /> */}
      </ContentsWrap>
    </div>
  );
}
