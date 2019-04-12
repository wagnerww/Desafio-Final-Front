import React, { Component } from "react";
import {
  Container,
  ContainerDetails,
  Banner,
  Titulo,
  Descricao,
  Small
} from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MeetupActions from "../../store/ducks/meetup";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";

class MeetupDetails extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { meetupRequest } = this.props;
    await meetupRequest(id);
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    const { meetupInscricao } = this.props;
    meetupInscricao(id);
  };

  render() {
    const { data } = this.props.meetup;

    const { handleSubmit } = this;

    return (
      <Container>
        <Banner src={`http://localhost:3001/files/${data.meetimagem}`} />
        <ContainerDetails>
          <Titulo>{data.meettitulo}</Titulo>
          <Small>{`${data.meetqtdinscritos} membros`}</Small>
          <Descricao>{data.meetdescricao}</Descricao>
          <Small>Realizado em:</Small>
          <Descricao>{data.meetlocalizacao}</Descricao>
        </ContainerDetails>
        <Button
          descricao="Inscrever-se"
          type="submit"
          onClick={e => handleSubmit(e, data.id)}
        />
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
