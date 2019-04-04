import React from "react";

import { Container, Mesage } from "./styles";

const Messagem = ({ type, descricao }) => (
  <Container>
    <Mesage>{descricao}</Mesage>
  </Container>
);

export default Messagem;
