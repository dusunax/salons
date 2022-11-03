import styled from "@emotion/styled";

import TitleOne from "../../atoms/title/title-h1";

const SectionTitle = (props) => {
  const { title, text } = props.titleProps;
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
