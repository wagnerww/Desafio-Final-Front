import { all, takeLatest } from "redux-saga/effects";

// ---- AUTH
import { AuthTypes } from "../ducks/auth";
import { authRequest } from "./auth";

// ---- USUARIO
import { UsuarioTypes } from "../ducks/usuario";
import { userCreate, userUpdate, userGet } from "./usuario";

// ---- PREFERENCIAS
import { PreferenciasTypes } from "../ducks/preferencias";
import { preferencesRequest } from "./preferencias";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, authRequest),

    takeLatest(UsuarioTypes.USER_CREATE, userCreate),
    takeLatest(UsuarioTypes.USER_UPDATE, userUpdate),
    takeLatest(UsuarioTypes.USER_GET, userGet),

    takeLatest(PreferenciasTypes.PREFERENCES_REQUEST, preferencesRequest)
  ]);
}
