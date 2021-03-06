import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupRequest: ["id"],
  meetupInsert: ["data", "file"],
  meetupSuccess: ["data"],
  meetupInscricao: ["id"],
  meetupError: ["error"]
});

export const MeetupTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  succcess: false,
  isloading: false,
  iserror: false,
  msgError: ""
});

/* Reducers */

export const insert = state => state.merge({ isloading: true, iserror: false });
export const request = state =>
  state.merge({ isloading: true, iserror: false });
export const inscricao = state => state.merge({ isloading: true });
export const success = (state, { data }) =>
  state.merge({ isloading: false, data, iserror: false });
export const error = (state, { error }) =>
  state.merge({ isloading: false, iserror: true, msgError: error });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEETUP_INSERT]: insert,
  [Types.MEETUP_REQUEST]: request,
  [Types.MEETUP_SUCCESS]: success,
  [Types.MEETUP_INSCRICAO]: inscricao,
  [Types.MEETUP_ERROR]: error
});
