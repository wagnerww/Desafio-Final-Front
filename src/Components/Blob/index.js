import React from "react";

import { Container, Campo, Label, Box } from "./styles";

const Input = ({ name, label, ...options }) => (
  <Container>
    <Label>{label}</Label>
    <Box>
      <Campo type="file" name={name} {...options} />
      <i className="fas fa-camera fa-2x" />
    </Box>
  </Container>
);

export default Input;
