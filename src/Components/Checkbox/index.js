import React from "react";

import { Container, Titulo, Box, Check } from "./styles";

const Checkbox = ({ descricao, ...options }) => (
  <Container>
    <Check type="checkbox" {...options} />
    <Box for={options.id} />
    <Titulo>{descricao}</Titulo>
  </Container>
);

export default Checkbox;
