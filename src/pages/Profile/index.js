import React, { Component, Fragment } from "react";
import { Container, Titulo, Formulario, Preferencias } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import UsuarioActions from "../../store/ducks/usuario";

import Loading from "../../Components/Loading";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";
import Mensagem from "../../Components/Mensagem";

class Profile extends Component {
  async componentDidMount() {
    const { preferencesRequest, userGet } = this.props;
    userGet();
    preferencesRequest();
  }

  handleChange = async e => {
    const { name, value } = e.target;
    const { userHandleChange } = this.props;
    await userHandleChange(name, value);
  };

  handleChangeTecnologinas = async e => {
    const { name } = e.target;
    const { userHandleChangeTecnologias } = this.props;
    userHandleChangeTecnologias(name);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { usrsenha, usrsenha_confirmacao } = this.props.usuario.dataForm;

    if (usrsenha_confirmacao === usrsenha) {
      const { userUpdate } = this.props;
      const { dataForm } = this.props.usuario;
      userUpdate(dataForm);
    } else {
      const { userError } = this.props;
      userError("As senhas devem ser iguais");
    }
  };

  render() {
    const { data } = this.props.preferencias;
    const isloadingPref = this.props.preferencias.isloading;
    const user = this.props.usuario.dataForm;
    const { usrnome, usrsenha, usrsenha_confirmacao } = user;

    const { isloading, iserror, msgError } = this.props.usuario;
    const { handleSubmit, handleChange, handleChangeTecnologinas } = this;

    return (
      <Fragment>
        {!!isloading || !!isloadingPref ? (
          <Loading />
        ) : (
          <Fragment>
            {!!iserror ? <Mensagem descricao={msgError} /> : null}
            <Container>
              <Formulario onSubmit={handleSubmit}>
                <Input
                  name="usrnome"
                  label="Nome"
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                  value={usrnome}
                />
                <Input
                  name="usrsenha"
                  label="Senha"
                  placeholder="Sua senha secreta"
                  onChange={handleChange}
                  type="password"
                  value={usrsenha}
                />
                <Input
                  name="usrsenha_confirmacao"
                  label="Confirmação da senha"
                  placeholder="Sua senha secreta"
                  onChange={handleChange}
                  value={usrsenha_confirmacao}
                  type="password"
                />

                <Titulo>Preferências</Titulo>
                {data.map((pref, index) => {
                  let checked = "";

                  !!user.tecnologias &&
                    user.tecnologias.find(userTec => {
                      return userTec.id === pref.id
                        ? (checked = "checked")
                        : (checked = "");
                    });

                  return (
                    <Preferencias key={index}>
                      <CheckBox
                        descricao={pref.tecdescricao}
                        name={pref.id}
                        id={pref.id}
                        onChange={handleChangeTecnologinas}
                        defaultChecked={checked}
                      />
                    </Preferencias>
                  );
                })}
                <Button descricao="Salvar" type="submit" />
              </Formulario>
            </Container>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  preferencias: state.preferencias,
  usuario: state.usuario
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PreferencesActions, ...UsuarioActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
