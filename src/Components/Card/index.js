import React from "react";

import {
  Container,
  Image,
  BoxInfo,
  Info,
  Membros,
  Inscricao,
  StyledLink
} from "./styles";

const Card = ({ img, titulo, incritos, id }) => (
  <Container>
    <Image src={`http://localhost:3001/files/${img}`} />
    <BoxInfo>
      <Info>
        <strong>{titulo}</strong>
        <Membros>{`${incritos} membros`}</Membros>
      </Info>
      <StyledLink to={`/meetupDetail/${id}`}>
        <Inscricao>
          <i class="fas fa-chevron-right" />
        </Inscricao>
      </StyledLink>
    </BoxInfo>
  </Container>
);

export default Card;
