import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  requestDashboard: [""],
  successDashboard: ["data"],
  searchDashboard: ["titulo"]
});

export const DashboardTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {
    inscricoes: [],
    proximos: [],
    recomendados: []
  },
  isloading: false
});

/* Reducers */

export const requestDashboard = state => state.merge({ isloading: true });
export const successDashboard = (state, { data }) =>
  state.merge({ isloading: false, data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_DASHBOARD]: requestDashboard,
  [Types.SUCCESS_DASHBOARD]: successDashboard,
  [Types.SEARCH_DASHBOARD]: requestDashboard
});
