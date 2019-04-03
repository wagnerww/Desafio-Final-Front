import React from 'react';

import { Botao } from './styles';

const Button = ({ descricao, ...options }) => <Botao {...options}>{descricao}</Botao>;

export default Button;
