import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as auth } from "./auth";
import { reducer as usuario } from "./usuario";
import { reducer as preferencias } from "./preferencias";

export default history =>
  combineReducers({
    auth,
    usuario,
    preferencias,
    router: connectRouter(history)
  });
