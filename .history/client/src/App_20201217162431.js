import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./utils/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch></Switch>
      </Layout>
    </div>
  );
};

export default App;
