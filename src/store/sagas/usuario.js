import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";

import UserAction from "../ducks/usuario";

export function* userCreate({ usuario }) {
  try {
    const response = yield call(api.post, "usuarios", usuario);
    yield put(push("/"));
  } catch (error) {
    const { data } = error.response;
    const mensagem = data.error;

    yield put(UserAction.userError(mensagem));
  }
}

export function* userUpdate({ usuario }) {
  try {
    const response = yield call(api.put, "app/usuarios", usuario);
    yield put(push("/"));
  } catch (error) {
    const { data } = error.response;
    const mensagem = data.error;

    yield put(UserAction.userError(mensagem));
  }
}

export function* userPreferencias({ preferencias }) {
  try {
    const response = yield call(
      api.put,
      "app/usuarios/preferencias",
      preferencias
    );
    yield put(push("/"));
  } catch (error) {
    const { data } = error.response;
    const mensagem = data.error;

    yield put(UserAction.userError(mensagem));
  }
}

export function* userGet() {
  try {
    const { data } = yield call(api.get, "app/usuarios");
    yield put(UserAction.userSuccess(data));
  } catch (error) {
    console.log("error", error);
  }
}
