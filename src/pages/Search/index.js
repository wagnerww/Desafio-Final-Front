import React, { Component, Fragment } from "react";

import { Container, ContainerMeetups, Title } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import InputIcon from "../../Components/InputIcon";

import DashboardActions from "../../store/ducks/dashboard";

import Card from "../../Components/Card";
import Loading from "../../Components/Loading";

class Dashboard extends Component {
  state = {
    titulo: ""
  };

  componentDidMount() {
    const { requestDashboard } = this.props;

    requestDashboard();
  }

  handleChange = async e => {
    const { value } = e.target;
    this.setState({ titulo: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchDashboard } = this.props;
    searchDashboard(this.state.titulo);
  };

  Meetups = (title, array) => (
    <Fragment>
      <Title>{title}</Title>
      <ContainerMeetups>
        {!!array.length > 0
          ? array.map((item, index) => (
              <Card
                key={index}
                img={item.meetimagem}
                titulo={item.meettitulo}
                incritos={item.meetqtdinscritos}
                id={item.id}
              />
            ))
          : null}
      </ContainerMeetups>
    </Fragment>
  );

  render() {
    const { Meetups, handleSubmit, handleChange } = this;
    const { data, isloading } = this.props.dashboard;
    const { inscricoes, proximos, recomendados } = data;

    return (
      <Fragment>
        {isloading ? <Loading /> : null}
        <Container>
          <form onSubmit={handleSubmit}>
            <InputIcon placeholder="Buscar meetups" onChange={handleChange} />
          </form>
          {Meetups("Inscrições", inscricoes)}
          {Meetups("Próximos meetups", proximos)}
          {Meetups("Recomendados", recomendados)}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DashboardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
