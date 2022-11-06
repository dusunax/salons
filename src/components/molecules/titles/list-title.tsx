import styled from "@emotion/styled";
import TitleTwo from "../../atoms/title/title-h2";

import { SectionTitle as SectionTitleType } from "../../../models/section-title";

const SectionTitle = ({ sectionTitle }: { sectionTitle: SectionTitleType }) => {
  const { title, text } = sectionTitle;

  return (
    <>
      <TitleTwo>{title}</TitleTwo>
      <StTextContent>{text}</StTextContent>
    </>
  );
};

export default SectionTitle;

const StTextContent = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;
