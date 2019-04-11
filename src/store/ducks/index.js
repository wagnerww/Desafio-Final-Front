import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as auth } from "./auth";
import { reducer as usuario } from "./usuario";
import { reducer as preferencias } from "./preferencias";
import { reducer as meetup } from "./meetup";

export default history =>
  combineReducers({
    auth,
    usuario,
    preferencias,
    meetup,
    router: connectRouter(history)
  });
