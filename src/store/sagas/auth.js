import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";

import AuthAction from "../ducks/auth";

export function* authRequest({ usremail, usrpassword }) {
  try {
    const { data } = yield call(api.post, "signin", { usremail, usrpassword });
    const { token } = data;
    const { id, usrprimeiroacesso } = data.user;
    localStorage.setItem("@Meetapp:access", token);
    yield put(AuthAction.authSuccess(token, id));

    usrprimeiroacesso
      ? yield put(push("/preferencias"))
      : console.tron.log("vai para a home acesso");
  } catch (error) {
    yield put(AuthAction.authError());
  }
}
