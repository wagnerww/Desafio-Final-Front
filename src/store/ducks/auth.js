import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  authRequest: ["usremail", "usrpassword"],
  authSuccess: ["token", "user"],
  authError: []
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  isLogado: !!localStorage.getItem("@Meetapp:access"),
  token: localStorage.getItem("@Meetapp:access"),
  user: null,
  iserror: false
});

/* Reducers */

export const success = (state, { token, user }) =>
  state.merge({ loading: false, iserror: false, isLogado: true, token, user });

export const request = state => state.merge({ loading: true, iserror: false });

export const error = state => state.merge({ iserror: true, loading: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_ERROR]: error
});
