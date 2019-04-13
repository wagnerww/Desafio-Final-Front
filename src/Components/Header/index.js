import React from "react";

import Icon from "../../assets/logo-white.svg";

import { Container, Menu, StyledLink } from "./styles";

const Header = () => (
  <Container>
    <Menu>
      <ul>
        <img src={Icon} />
      </ul>
      <ul>
        <StyledLink to={"/dashboard"}>Início</StyledLink>
      </ul>
      <ul>
        <StyledLink to={"/search"}>Buscar</StyledLink>
      </ul>
      <ul>
        <StyledLink to={"/newmeetup"}>Novo meetup</StyledLink>
      </ul>
    </Menu>
    <StyledLink to="/profile">
      <i className="far fa-user" />
    </StyledLink>
  </Container>
);

export default Header;
