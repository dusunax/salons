import styled from "@emotion/styled";

export const StNav = styled.nav`
  height: 4rem;

  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .right {
    display: flex;
    gap: 1rem;
  }
`;

export const StLogo = styled.div<{ profileUrl: string }>`
  width: 65px;

  background: url(${(props) => props.profileUrl}) center / cover;

  font-size: 2rem;
  text-align: center;
`;

export const StMenu = styled.ul<{ on: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    padding: 0 1rem;

    color: #828282;

    transition: all 0.2s;
    cursor: pointer;
  }

  li.active,
  li:hover {
    color: #111;
  }

  @media (max-width: 900px) {
    width: 100%;

    position: absolute;
    top: 100%;
    left: 0;

    flex-flow: column;

    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

    overflow: hidden;

    transition: height 0.4s 0.2s;

    li {
      padding: 1.2rem 2rem;
      height: 0px;
      width: 100%;
      height: auto;
    }

    ${(props) => (props.on ? "height: 400%" : "height: 0;")}
  }
`;

export const StHamburger = styled.div<{ on: boolean }>`
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    ${(props) => (props.on ? "" : "opacity: 0.4")}
  }

  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
