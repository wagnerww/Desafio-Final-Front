import React, { Component, Fragment } from "react";
import {
  Container,
  Titulo,
  Formulario,
  Descricao,
  User,
  Preferencias,
  Image
} from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import MeetupActions from "../../store/ducks/meetup";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Blob from "../../Components/Blob";
import Mensagem from "../../Components/Mensagem";

class Meetup extends Component {
  state = {
    data: {
      meettitulo: "",
      meetdescricao: "",
      meetlocalizacao: "",
      tecnologias: []
    },
    file: ""
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

  handleChangeFile = async e => {
    const file = e.target.files[0];
    console.log("file", file);
    await this.setState({
      file
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
  };

  handleSubmit = e => {
    e.preventDefault();
    const { meetupInsert } = this.props;
    console.log("meetup", this.state);
    meetupInsert(this.state.data, this.state.file);
  };

  render() {
    const { data } = this.props.preferencias;
    const { isloading, iserror, msgError } = this.props.meetup;
    const {
      handleSubmit,
      handleChange,
      handleChangeTecnologinas,
      handleChangeFile
    } = this;

    return (
      <Fragment>
        {!!isloading ? <Loading /> : null}
        {!!iserror ? <Mensagem descricao={msgError} /> : null}
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

            {!this.state.file ? (
              <Blob
                name="meetimagem"
                label="Imagem"
                onChange={handleChangeFile}
              />
            ) : (
              <Image src={URL.createObjectURL(this.state.file)} />
            )}

            <Input
              name="meetlocalizacao"
              label="Localização"
              placeholder="Onde seu meetup irá acontecer?"
              onChange={handleChange}
            />

            <Titulo>Tema do meetup</Titulo>
            {data.map((pref, index) => (
              <Preferencias key={index}>
                <CheckBox
                  descricao={pref.tecdescricao}
                  name={pref.id}
                  id={pref.id}
                  onChange={handleChangeTecnologinas}
                />
              </Preferencias>
            ))}
            <Button descricao="Salvar" type="submit" />
          </Formulario>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  preferencias: state.preferencias,
  meetup: state.meetup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PreferencesActions, ...MeetupActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetup);
