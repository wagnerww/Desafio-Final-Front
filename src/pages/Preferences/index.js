import React, { Component } from "react";
import { Container } from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PreferencesActions from "../../store/ducks/preferencias";
import UsuarioActions from "../../store/ducks/usuario";

import Loading from "../../Components/Loading";

class Preferences extends Component {
  state = {
    tecnologias: []
  };

  componentDidMount() {
    console.log("props", this.props);
    const { preferencesRequest } = this.props;
    preferencesRequest();
  }

  handleChange = async e => {
    const { name } = e.target;
    const isChecked = e.target.cheked;

    await this.setState({
      tecnologias: [...this.state.tecnologias, { id: name }]
    });
    console.log("datas", this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { userUpdate } = this.props;

    userUpdate(this.state);
  };

  render() {
    const { data } = this.props.preferencias;

    const { handleSubmit, handleChange } = this;

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          {data.map((pref, index) => (
            <div key={index}>
              <input type="checkbox" name={pref.id} onChange={handleChange} />
              <p>{pref.tecdescricao}</p>
            </div>
          ))}
          <button type="submit">vai</button>
        </form>
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
)(Preferences);
