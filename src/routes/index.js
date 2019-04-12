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

// ---- PRIVATE ROUTES
import Profile from "../pages/Profile";
import Preferencias from "../pages/Preferences";
import Meetup from "../pages/Meetup";
import MeetupDetails from "../pages/MeetupDetails";
import Dashboard from "../pages/Dashboard";

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {/* PUBLIC ROUTES */}
          <Public path="/signin" component={Login} />
          <Public path="/signup" component={SignUp} />

          {/* PRIVATE ROUTES */}
          <Private exact path="/" component={Dashboard} />
          <Private path="/preferencias" component={Preferencias} />
          <Private path="/profile" component={Profile} />
          <Private path="/newmeetup" component={Meetup} />
          <Private path="/meetupDetail/:id" component={MeetupDetails} />
          <Private path="/dashboard" component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Routes;
