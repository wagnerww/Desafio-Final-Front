import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import MainPrivate from "./Components/MainPrivate";
import MainPublic from "./Components/MainPublic";



class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MainPublic />
      </Fragment>
    );
  }
}

export default App;
