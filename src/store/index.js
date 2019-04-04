import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import history from "../routes/history";

import sagas from "./sagas";
import reducers from "./ducks";

const middleware = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(
  reducers(history),
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    createAppropriateStore()
  )
);

sagaMiddleware.run(sagas);

if (process.env.NODE_ENV === "development") {
  console.tron.log(store.getState());
}

export default store;
