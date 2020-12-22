import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./utils/Layout";
import Home from "./components/Home";
import ScaleInfo from "./components/ScaleInfo";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
