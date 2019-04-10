import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Campo = styled.textarea`
  color: #807e85;
  background: transparent;
  border: none;
  height: 100px;
  font-size: 1.1em;

  &::placeholder: {
    color: #807e85;
  }
`;
