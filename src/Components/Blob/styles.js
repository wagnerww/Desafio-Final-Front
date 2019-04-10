import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Campo = styled.input`
  color: #807e85;
  background: transparent;
  border: none;
  height: 40px;
  font-size: 1.1em;
  border: 1px dashed #fff;
  padding: 15px;

  &::placeholder: {
    color: #807e85;
  }
`;
