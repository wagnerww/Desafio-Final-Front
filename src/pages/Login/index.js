import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import logo from "../../assets/logo.svg";

import { Container, Label } from "./styles";

class Login extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt="" />
        <Input name="teste" label="Email" placeholder="Digite seu e-mail" />
        <Input name="teste" label="Senha" placeholder="Sua senha secreta" />
        <Button descricao="Entrar" />
        <Label>criar conta grátis</Label>
      </Container>
    );
  }
}

export default Login;
