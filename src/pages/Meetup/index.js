import React, { Component } from "react";
import { Container, Titulo, Formulario, Descricao, User } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import UsuarioActions from "../../store/ducks/usuario";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Blob from "../../Components/Blob";

class Meetup extends Component {
  state = {
    data: {
      meettitulo: "",
      meetdescricao: "",
      meetlocalizacao: "",
      tecnologias: []
    }
  };

  componentDidMount() {
    const { preferencesRequest } = this.props;
    preferencesRequest();
  }

  handleChange = async e => {
    const { name, value } = e.target;

    await this.setState({
      data: { ...this.state.data, [name]: value }
    });
    console.log("meet", this.state);
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
    console.log("meetup", this.state);
    userUpdate(this.state);
  };

  render() {
    const { data } = this.props.preferencias;

    const { handleSubmit, handleChange, handleChangeTecnologinas } = this;

    return (
      <Container>
        <Formulario onSubmit={handleSubmit}>
          <Input
            name="meettitulo"
            label="Título"
            placeholder="Digite o título do meetup"
            onChange={handleChange}
          />

          <TextArea
            name="meetdescricao"
            label="Descrição"
            placeholder="Descrição do meetup"
            onChange={handleChange}
          />

          <Blob name="meetimagem" label="Imagem" onChange={handleChange} />

          <Input
            name="meetlocalizacao"
            label="Localização"
            placeholder="Onde seu meetup irá acontecer?"
            onChange={handleChange}
          />

          <Titulo>Tema do meetup</Titulo>
          {data.map((pref, index) => (
            <div key={index}>
              <CheckBox
                descricao={pref.tecdescricao}
                name={pref.id}
                id={pref.id}
                onChange={handleChangeTecnologinas}
              />
            </div>
          ))}
          <Button descricao="Salvar" type="submit" />
        </Formulario>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  preferencias: state.preferencias
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PreferencesActions, ...UsuarioActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetup);
