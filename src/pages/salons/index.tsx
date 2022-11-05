import { useEffect, useState } from "react";
import Head from "next/head";

import { API_URL } from "../../config/index";
import { filteringMeetup } from "../../utils/meetupFilter";

import SectionMeetupsList from "../../components/organisms/section/section-meetups-list";
import SectionIntroduce from "../../components/organisms/section/section-introduces";
import SectionTitle from "../../components/molecules/titles/section-title";
import Banner from "../../components/atoms/banner/banner";
import ContentsWrap from "../../components/templates/shared/contents-wrap";

import commingSoonImage from "../../../public/banners/coming_soon_banner.jpg";

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

  const listOptionA = {
    filterKeyword: "closedMeetup",
    filterSection: true,
  };
  const listOptionB = {
    filterKeyword: "openMeetup",
    filterSection: false,
    ...sectionMiddleData,
  };

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

  const addFilter = (fetchedList) => {
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

  const fetchHandler = async () => {
    const crruentList = await fetchMeetupsList();
    const addFilterList = await addFilter(crruentList);
    setMeetupsList(addFilterList);
  };

  useEffect(() => {
    fetchHandler();
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
          listOption={listOptionA}
          meetupsList={meetupsList}
        />

        {/* 진행 중인 모임 */}
        <SectionMeetupsList
          listOption={listOptionB}
          meetupsList={meetupsList}
        />
      </ContentsWrap>
    </div>
  );
}
