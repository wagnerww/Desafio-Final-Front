import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UsuarioActions from "../../store/ducks/usuario";

// import { Container } from './styles';

class Profile extends Component {
  componentDidMount() {
    const { userGet } = this.props;
    userGet();
  }

  render() {
    return <div />;
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
)(Profile);
