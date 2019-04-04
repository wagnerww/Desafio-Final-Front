import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  preferencesRequest: [],
  preferencesLoad: ["data"]
});

export const PreferenciasTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  isloading: true
});

/* Reducers */
export const request = state => state.merge({ isloading: true });
export const load = (state, { data }) =>
  state.merge({ isloading: false, data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PREFERENCES_REQUEST]: request,
  [Types.PREFERENCES_LOAD]: load
});
