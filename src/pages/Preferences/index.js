import React, { Component } from "react";
import { Container, Titulo, Formulario, Descricao, User } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import UsuarioActions from "../../store/ducks/usuario";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";

class Preferences extends Component {
  state = {
    tecnologias: []
  };

  componentDidMount() {
    const { preferencesRequest, userGet } = this.props;
    preferencesRequest();
    userGet();
  }

  handleChange = async e => {
    const { name } = e.target;

    await this.setState({
      tecnologias: [...this.state.tecnologias, { id: name }]
    });

    console.log("pref", this.state);
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

    const { handleSubmit, handleChange } = this;

    return (
      <Container>
        <Formulario onSubmit={handleSubmit}>
          <User>Olá, {user.usrnome}</User>
          <Descricao>
            Parece que é o seu primeiro acesso por aqui, comece escolhendo
            algumas preferências para selecionarmos os melhores meetups pra
            você:
          </Descricao>

          <Titulo>Preferências</Titulo>
          {data.map((pref, index) => (
            <div key={index}>
              <CheckBox
                descricao={pref.tecdescricao}
                name={pref.id}
                id={pref.id}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button descricao="Continuar" type="submit" />
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
)(Preferences);
