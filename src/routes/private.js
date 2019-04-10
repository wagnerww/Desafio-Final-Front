import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import MainPrivate from "../Components/MainPrivate";

import store from "../store";

class PrivateRoutes extends Component {
  render() {
    const { component: Component, ...options } = this.props;
    return (
      <Route
        {...options}
        render={props =>
          //Pega o estado atual do redux, se usuário esta logado
          store.getState().auth.isLogado ? (
            <MainPrivate>
              <Component {...props} />
            </MainPrivate>
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoutes;
