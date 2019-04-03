import React from 'react';

import { Container, Main } from './styles';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

const MainPrivate = () => <Container>
  <Header />
  <Main>
    <Input name="teste" label="Email" placeholder="Digite o título do meetup" />
    <Input name="teste" label="Senha" placeholder="Digite o título do meetup" />
    <Button descricao="Entrar" />
  </Main>
</Container>;

export default MainPrivate;
