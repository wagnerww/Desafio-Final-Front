import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  userCreate: ["usuario"],
  userSuccess: ["data"],
  userUpdate: ["usuario"],
  userGet: [],
  userHandleChange: ["name", "value"],
  userHandleChangeTecnologias: ["id"]
});

export const UsuarioTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  dataForm: {
    usrnome: "",
    usrsenha: "",
    usrsenha_confirmacao: "",
    Tecnologias: []
  },
  isloading: false,
  iserror: false
});

/* Reducers */

export const create = state => state.merge({ isloading: true });
export const update = state => state.merge({ isloading: true });
export const success = (state, { data }) =>
  state.merge({
    isloading: false,
    iserror: false,
    data,
    dataForm: {
      ...state.dataForm,
      usrnome: data.usrnome,
      Tecnologias: data.Tecnologias
    }
  });
export const get = state => state.merge({ isloading: true });
export const handleChange = (state, { name, value }) =>
  state.merge({ dataForm: { ...state.dataForm, [name]: value } });
export const handleChangeTecnologias = (state, { id }) =>
  state.merge({
    dataForm: {
      ...state.dataForm,
      Tecnologias: [...state.dataForm.Tecnologias, { id }]
    }
  });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_CREATE]: create,
  [Types.USER_UPDATE]: update,
  [Types.USER_SUCCESS]: success,
  [Types.USER_GET]: get,
  [Types.USER_HANDLE_CHANGE]: handleChange,
  [Types.USER_HANDLE_CHANGE_TECNOLOGIAS]: handleChangeTecnologias
});
