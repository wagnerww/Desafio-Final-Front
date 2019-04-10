import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Titulo = styled.p`
  margin-left: 10px;
`;

export const Box = styled.label`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: #4f4d55;
  border-radius: 5px;
`;

export const Check = styled.input`
  opacity: 0;

  &:checked ~ ${Box} {
    background: #d76273;
  }
`;
