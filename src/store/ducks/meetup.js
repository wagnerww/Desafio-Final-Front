import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupRequest: ["id"],
  meetupInsert: ["data", "file"],
  meetupSuccess: ["data"],
  meetupInscricao: ["id"]
});

export const MeetupTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  succcess: false,
  loading: false
});

/* Reducers */

export const insert = state => state.merge({ loading: true });
export const request = state => state.merge({ loading: true });
export const inscricao = state => state.merge({ loading: true });
export const success = (state, { data }) =>
  state.merge({ loading: false, data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEETUP_INSERT]: insert,
  [Types.MEETUP_REQUEST]: request,
  [Types.MEETUP_SUCCESS]: success,
  [Types.MEETUP_INSCRICAO]: inscricao
});
