import React from "react";

import { Container, Campo, Label, Box } from "./styles";

const Input = ({ name, label, ...options }) => (
  <Container>
    <Label>{label}</Label>
    <Box>
      <Campo type="file" name={name} {...options} />
      <h1>Selecione</h1>
    </Box>
  </Container>
);

export default Input;
