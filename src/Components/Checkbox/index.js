import React from "react";

import { Container, Titulo, Box, Check } from "./styles";

const Checkbox = ({ descricao, ...options }) => (
  <Container>
    <Check type="checkbox" {...options} />
    <Box htmlFor={options.id} />
    <Titulo>{descricao}</Titulo>
  </Container>
);

export default Checkbox;
