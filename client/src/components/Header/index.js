import React from "react";
import { withRouter } from "react-router-dom";

import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <Menu />
    </header>
  );
};

export default withRouter(Header);
