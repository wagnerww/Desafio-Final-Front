import React, { Component, Fragment } from "react";

import { Container, ContainerMeetups, Title } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DashboardActions from "../../store/ducks/dashboard";

import Card from "../../Components/Card";

class Dashboard extends Component {
  componentDidMount() {
    const { requestDashboard } = this.props;
    requestDashboard();
  }

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
    const { Meetups } = this;
    const { data } = this.props.dashboard;
    const { inscricoes, proximos, recomendados } = data;

    return (
      <Container>
        {Meetups("Inscrições", inscricoes)}
        {Meetups("Próximos meetups", proximos)}
        {Meetups("Recomendados", recomendados)}
      </Container>
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
