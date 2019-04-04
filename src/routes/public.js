import React from "react";
import { Route } from "react-router-dom";

import MainPublic from "../Components/MainPublic";

const Public = ({ component: Component, ...options }) => (
  <Route
    {...options}
    render={props => (
      <MainPublic>
        <Component {...props} />
      </MainPublic>
    )}
  />
);

export default Public;
