import styled from "@emotion/styled";
import TitleTwo from "../../atoms/title/title-h2";

const SectionTitle = ({ sectionTitle }) => {
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
