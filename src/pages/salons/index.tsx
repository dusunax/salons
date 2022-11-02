import Head from "next/head";

import SectionMeetups from "../../components/templates/section/section-meetups";
import SectionIntroduce from "../../components/templates/section/section-introduces";
import SectionTitle from "../../components/molecules/titles/section-title";
import Banner from "../../components/atoms/banner/banner";

export default function SalonsPage() {
  const listA = { filter: true, title: "" };
  const listB = { filter: false, title: "제목" };

  return (
    <div>
      <Head>
        <title>정기모임</title>
      </Head>

      <Banner />
      <SectionTitle />

      {/* 자기소개 */}
      <SectionIntroduce />

      {/* 모집 중인 모임 */}
      <SectionMeetups listOption={listA} />

      {/* 진행 중인 모임 */}
      <SectionMeetups listOption={listB} />
    </div>
  );
}
