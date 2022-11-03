import React from "react";

import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";

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
