import React, { Component } from "react";
import { Container, Banner, Formulario, Titulo, User } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MeetupActions from "../../store/ducks/meetup";

import Loading from "../../Components/Loading";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import CheckBox from "../../Components/Checkbox";

class MeetupDetails extends Component {
  async componentDidMount() {
    const { meetupRequest } = this.props;
    await meetupRequest(28);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { meetupInscricao } = this.props;

    meetupInscricao(28);
  };

  render() {
    const { data } = this.props.meetup;
    console.log("dataform", data);
    const { handleSubmit } = this;

    return (
      <Container>
        <Banner src={`http://localhost:3001/files/${data.meetimagem}`} />
        <Titulo>{data.meettitulo}</Titulo>
        <small>{`${data.meetqtdinscritos} inscritos`}</small>
        <p>{data.meetdescricao}</p>
        <small>Realizado em:</small>
        <p>{data.meetlocalizacao}</p>
        <Button descricao="Inscrever-se" type="submit" onClick={handleSubmit} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetupDetails);
