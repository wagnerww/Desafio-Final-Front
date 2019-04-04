import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  userCreate: ["usuario"],
  userSuccess: ["data"],
  userUpdate: ["usuario"],
  userGet: []
});

export const UsuarioTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  isloading: false,
  iserror: false
});

/* Reducers */

export const create = state => state.merge({ isloading: true });
export const update = state => state.merge({ isloading: true });
export const success = (state, { data }) =>
  state.merge({ isloading: false, iserror: false, data });
export const get = state => state.merge({ isloading: true });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_CREATE]: create,
  [Types.USER_UPDATE]: update,
  [Types.USER_SUCCESS]: success,
  [Types.USER_GET]: get
});
