import React, { Component, Fragment } from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

// ---- HISTORICO DA NAVEGAÇÃO
import history from "./history";

// ---- TEMPLATES
import Private from "./private";
import Public from "./public";

//  ---- PUBLIC ROUTES
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Preferencias from "../pages/Preferences";
import Profile from "../pages/Profile";

// ---- PRIVATE ROUTES

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {/* PUBLIC ROUTES */}
          <Public exact path="/" component={Login} />
          <Public path="/signup" component={SignUp} />
          <Public path="/preferencias" component={Preferencias} />
          <Public path="/profile" component={Profile} />
          {/* PRIVATE ROUTES */}
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Routes;
