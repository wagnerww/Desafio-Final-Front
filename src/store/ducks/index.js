import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as auth } from "./auth";
import { reducer as usuario } from "./usuario";
import { reducer as preferencias } from "./preferencias";
import { reducer as meetup } from "./meetup";
import { reducer as dashboard } from "./dashboard";

export default history =>
  combineReducers({
    auth,
    usuario,
    preferencias,
    meetup,
    dashboard,
    router: connectRouter(history)
  });
