import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import PreferenciasActions from "../ducks/preferencias";

export function* preferencesRequest() {
  try {
    const { data } = yield call(api.get, "app/tecnologias");

    yield put(PreferenciasActions.preferencesLoad(data));
  } catch (error) {}
}
