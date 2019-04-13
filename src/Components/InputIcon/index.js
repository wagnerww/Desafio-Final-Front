import React from "react";

import { Container, Campo, Label, ContainerInput } from "./styles";

const Input = ({ name, label, ...options }) => (
  <Container>
    <Label>{label}</Label>
    <ContainerInput>
      <i className="fas fa-search" />
      <Campo name={name} {...options} />
    </ContainerInput>
  </Container>
);

export default Input;
