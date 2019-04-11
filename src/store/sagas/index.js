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

// ---- MEETUP
import { MeetupTypes } from "../ducks/meetup";
import { meetupInsert, requestMeetup, inscricaoMeetup } from "./meetup";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, authRequest),

    takeLatest(UsuarioTypes.USER_CREATE, userCreate),
    takeLatest(UsuarioTypes.USER_UPDATE, userUpdate),
    takeLatest(UsuarioTypes.USER_GET, userGet),

    takeLatest(PreferenciasTypes.PREFERENCES_REQUEST, preferencesRequest),

    takeLatest(MeetupTypes.MEETUP_INSERT, meetupInsert),
    takeLatest(MeetupTypes.MEETUP_REQUEST, requestMeetup),
    takeLatest(MeetupTypes.MEETUP_INSCRICAO, inscricaoMeetup)
  ]);
}
