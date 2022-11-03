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
  padding: 0 1.5rem;
`;
