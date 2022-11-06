import styled from "@emotion/styled";

import React from "react";

const ContentsWrap = (props) => {
  return (
    <StContentsWrap>
      <div>{props.children}</div>
    </StContentsWrap>
  );
};

export default ContentsWrap;

const StContentsWrap = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: calc(100vh - 5rem - 7rem);

  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  @media (max-width: 500px) {
    padding: 0 1.2rem;
  }
`;
