import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import "./config/Reactotron";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    );
  }
}

export default App;
