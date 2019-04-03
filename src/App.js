import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import Header from "./Components/Header";

import Input from './Components/Input';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Input name="teste" label="Email" placeholder="Digite o título do meetup" />
        <Input name="teste" label="Senha" placeholder="Digite o título do meetup" />
        <Button descricao="Entrar" />
      </Fragment>
    );
  }
}

export default App;
