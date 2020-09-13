import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Alternative2 from "views/landing/Alternative2.jsx";

import TagManager from "react-gtm-module";

import "./laapp.js";

const tagManagerArgs = {
  gtmId: "GTM-T4FSPW9"
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Alternative2 {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
