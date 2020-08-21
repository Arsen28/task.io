import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/home-page/home-page";
import Posts from "./components/posts/posts";
import Alboms from "./components/alboms/alboms";
import Users from "./components/users/users";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
          <Route path="/alboms" component={Alboms} />
          <Route path="/" component={HomePage} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

