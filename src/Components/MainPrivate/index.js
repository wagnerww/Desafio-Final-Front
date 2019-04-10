import React from "react";

import { Container, Main } from "./styles";
import Header from "../Header";

const MainPrivate = props => (
  <Container>
    <Header />
    <Main>{props.children}</Main>
  </Container>
);

export default MainPrivate;
