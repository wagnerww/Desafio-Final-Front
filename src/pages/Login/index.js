import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../store/ducks/auth";

import Mensagem from "../../Components/Mensagem";
import Loading from "../../Components/Loading";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import logo from "../../assets/logo.svg";

import { Container, Label } from "./styles";

class Login extends Component {
  state = {
    data: {
      usremail: "",
      usrsenha: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authRequest } = this.props;
    const { usremail, usrpassword } = this.state.data;

    authRequest(usremail, usrpassword);
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { loading, iserror } = this.props.auth;
    return (
      <Container>
        {!!loading ? <Loading /> : null}
        {!!iserror ? (
          <Mensagem descricao={"Usuário ou senha inválido"} />
        ) : null}

        <img src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <Input
            name="usremail"
            label="Email"
            placeholder="Digite seu e-mail"
            onChange={handleChange}
          />
          <Input
            name="usrpassword"
            label="Senha"
            placeholder="Sua senha secreta"
            onChange={handleChange}
            type="password"
          />
          <Button descricao="Entrar" type="submit" />
        </form>
        <Label to={"/signup"}>criar conta grátis</Label>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
