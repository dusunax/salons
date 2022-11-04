import Head from "next/head";

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
  const listA = {
    filter: true,
    title: "",
    list: [
      {
        id: 9,
        title: "모임 제목",
        host: {
          id: 99,
          profileImageUrl: "url주소",
          name: "이름",
          nickname: "닉네임",
          introduction: "회원 소개글",
          title: "회원 제목",
          instagramAccount: "",
          favortieMovie: "",
          email: "",
          phoneNumber: "",
          gender: "",
          birthday: "",
          serivcePolicyConsent: "",
          privacyPolicyConsent: "",
          marketingConsent: "",
          pointBalance: "",
        },
        thumbnailUrl: "",
        briefLocation: "위치",
        summary: "",
        openingDate: "2022-11-02T12:00:00+09:00",
        closingDate: "",
        createdAt: "2022-11-02T12:00:00+09:00",
        type: 1,
        attendeeCount: 0,
        maxCapacity: 12,
        price: 198000,
        discountPrice: null,
        tags: {
          dayOfWeek: ["일요일"],
          salonCategory: ["영화와 넷플릭스"],
          region: ["홍대"],
          season: [
            "7", // string입니다
          ],
          homeCuration: ["영화"],
          keyword: ["밤새도록영화이야기", "영화제100%즐기기"],
        },
        soldOut: "",
        comment: "",
        description: "",
        minCapacity: "",
        femaleCapacity: "",
        femaleCount: "",
        maleCapacity: "",
        maleCount: "",
        applyUrl: "",
        sessions: [
          {
            id: 99,
            palce: {
              id: 99,
              thumbnailUrl: "섬네일 url",
              name: "위치 이름",
              address: "위치 주소",
              introduction: "주소 소개",
            },
            order: 99,
            date: "2022-11-02T12:00:00+09:00",
            duration: 180,
            online: true,
            title: "",
            curriculum: "",
          },
        ],
        contents: [],
        extralmageUrl: [],
        additionalInformation: {
          memberLed: true,
        },
        openChatUrl: "",
      },
    ],
  };
  const listB = { filter: false, title: "제목", list: [] };

  return (
    <div>
      <Head>
        <title>정기모임</title>
      </Head>

      <Banner bannerProps={bannerData} />

      <ContentsWrap>
        <SectionTitle titleProps={sectionTitleData} />

        {/* 자기소개 */}
        <SectionIntroduce />

        {/* 모집 중인 모임 */}
        <SectionMeetupsList listOption={listA} />

        {/* 진행 중인 모임 */}
        <SectionMeetupsList
          listOption={listB}
          sectionTitle={sectionMiddleData}
        />
      </ContentsWrap>
    </div>
  );
}
