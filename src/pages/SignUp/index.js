import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UsuarioActions from "../../store/ducks/usuario";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Loading from "../../Components/Loading";
import logo from "../../assets/logo.svg";
import Mensagem from "../../Components/Mensagem";

import { Container, Label } from "./styles";

class SignUp extends Component {
  state = {
    data: {
      usrnome: "",
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
    const { userCreate } = this.props;
    userCreate(this.state.data);
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { isloading, iserror, msgError } = this.props.usuario;
    return (
      <Container>
        {!!isloading ? <Loading /> : null}
        {!!iserror ? <Mensagem descricao={msgError} /> : null}
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <Input
            name="usrnome"
            label="Nome"
            placeholder="Digite seu nome"
            onChange={handleChange}
          />
          <Input
            name="usremail"
            label="Email"
            placeholder="Digite seu e-mail"
            onChange={handleChange}
          />
          <Input
            name="usrsenha"
            label="Senha"
            placeholder="Sua senha secreta"
            onChange={handleChange}
            type="password"
          />
          <Button descricao="Criar conta" type="submit" />
        </form>
        <Label to={"/"}>Já tenho conta</Label>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.usuario
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsuarioActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
