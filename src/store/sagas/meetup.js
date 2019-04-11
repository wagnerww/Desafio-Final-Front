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
    console.log("file", file);
    dataImage.append("file", file, file.name);

    const responseImage = yield call(
      api.post,
      `app/meetup/${id}`,
      dataImage,
      config
    );
  } catch (error) {
    console.log("erro", error);
  }
}

export function* requestMeetup({ id }) {
  const { data } = yield call(api.get, `app/meetup/${id}`);
  console.log("data", data);
  yield put(MeetupAction.meetupSuccess(data));
}

export function* inscricaoMeetup({ id }) {
  const { data } = yield call(api.post, "app/inscricao", { id_meetups: id });
  console.log("data", data);
}
