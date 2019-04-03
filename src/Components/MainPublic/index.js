import React from 'react';

import { Container } from './styles';
import Input from '../Input';
import Button from '../Button';

const MainPublic = () => <Container>

  <Input name="teste" label="Email" placeholder="Digite seu e-mail" />
  <Input name="teste" label="Senha" placeholder="Sua senha secreta" />
  <Button descricao="Entrar" />

</Container>;

export default MainPublic;
