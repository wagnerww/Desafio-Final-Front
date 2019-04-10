import React from "react";

import { Container, Campo, Label } from "./styles";

const Input = ({ name, label, ...options }) => (
  <Container>
    <Label>{label}</Label>
    <Campo type="file" name={name} {...options} />
  </Container>
);

export default Input;
