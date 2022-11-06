import styled from "@emotion/styled";

import TitleOne from "../../atoms/title/title-h1";

import { SectionTitle as SectionTitleType } from "../../../models/section-title";

const SectionTitle = ({ titleProps }: { titleProps: SectionTitleType }) => {
  const { title, text } = titleProps;
  return (
    <>
      <TitleOne>{title}</TitleOne>
      <StTextContent>{text}</StTextContent>
    </>
  );
};

export default SectionTitle;

const StTextContent = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;
