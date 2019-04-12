import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import DashboardActions from "../ducks/dashboard";

export function* requestDashboard() {
  try {
    const { data } = yield call(api.get, "app/dashboard");
    yield put(DashboardActions.successDashboard(data));
  } catch (error) {
    console.log("erro", error);
  }
}
