import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <h1>OK </h1>
      </Fragment>
    );
  }
}

export default App;
