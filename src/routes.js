import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Mac from "./Components/Mac/Mac";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Mac} path="/mac" />
  </Switch>
);
