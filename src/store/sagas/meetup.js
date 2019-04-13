import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";

import MeetupAction from "../ducks/meetup";

export function* meetupInsert({ data, file }) {
  try {
    const response = yield call(api.post, "app/meetup", data);
    const { id } = response.data;

    const dataImage = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    dataImage.append("file", file, file.name);

    const responseImage = yield call(
      api.post,
      `app/meetup/${id}`,
      dataImage,
      config
    );
    yield put(push("/dashboard"));
  } catch (error) {
    const { data } = error.response;
    const mensagem = data.error;

    yield put(MeetupAction.meetupError(mensagem));
  }
}

export function* requestMeetup({ id }) {
  const { data } = yield call(api.get, `app/meetup/${id}`);
  console.log("data", data);
  yield put(MeetupAction.meetupSuccess(data));
}

export function* inscricaoMeetup({ id }) {
  const { data } = yield call(api.post, "app/inscricao", { id_meetups: id });
  yield put(push("/dashboard"));
}
