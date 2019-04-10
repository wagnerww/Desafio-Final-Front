import React, { Component } from "react";
import { Container, Titulo, Formulario, Descricao, User } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import UsuarioActions from "../../store/ducks/usuario";

import api from "../../services/api";

import Loading from "../../Components/Loading";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";

class Profile extends Component {
  state = {
    data: {
      usrnome: "",
      usrsenha: "",
      usrsenhaconfirmacao: "",
      tecnologias: []
    },
    tecnologias: []
  };

  async componentDidMount() {
    const { preferencesRequest, userGet } = this.props;
    await userGet();
    await preferencesRequest();
    /* const tecnologias = await api.get("app/tecnologias");
    const usuario = await api.get("app/usuarios");*/
  }

  handleChange = async e => {
    const { name, value } = e.target;

    await this.setState({
      data: { ...this.state.data, [name]: value }
    });
  };

  handleChangeTecnologinas = async e => {
    const { name } = e.target;
    await this.setState({
      data: {
        ...this.state.data,
        tecnologias: [...this.state.data.tecnologias, { id: name }]
      }
    });
    console.log("meet_tec", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userUpdate } = this.props;
    console.log("pref", this.state);
    userUpdate(this.state);
  };

  render() {
    const { data } = this.props.preferencias;
    const user = this.props.usuario.data;
    const { usrnome, usrsenha } = user;

    const { handleSubmit, handleChange, handleChangeTecnologinas } = this;

    return (
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
            type="password"
          />

          <Titulo>Preferências</Titulo>
          {data.map((pref, index) => {
            let checked = "";

            user.Tecnologias.find(userTec => {
              return userTec.id === pref.id
                ? (checked = "checked")
                : (checked = "");
            });
            console.log("check", checked);
            return (
              <div key={index}>
                <CheckBox
                  descricao={pref.tecdescricao}
                  name={pref.id}
                  id={pref.id}
                  onChange={handleChangeTecnologinas}
                  defaultChecked={checked}
                />
              </div>
            );
          })}
          <Button descricao="Salvar" type="submit" />
        </Formulario>
      </Container>
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
