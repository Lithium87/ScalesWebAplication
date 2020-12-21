import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="page_container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
