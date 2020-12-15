import React from "react";
import { Route, Switch } from "react-router-dom";
// import Airlines from "./airlines/airlines";
// import Airline from "./airline/airline";
import Test from "./test";
import Airlines from "./airlines/airlines";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
      <Route exact path="/airlines" component={Airlines} />

      {/* <Route exact path="/" component={Airlines} /> */}
      {/* <Route exact path="/airlines/:slug" component={Airline} /> */}
    </Switch>
  );
};

export default App;
