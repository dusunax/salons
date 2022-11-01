import React from "react";

import Header from "../components/organisms/header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
