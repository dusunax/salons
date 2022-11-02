import React from "react";

import Header from "../components/organisms/header/header";
import Footer from "../components/organisms/footer/footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
