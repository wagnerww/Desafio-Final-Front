import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background: #2f2e37;
  border-radius: 5px;
  color: #807e85;
  padding: 5px 10px 5px 10px;
`;

export const Campo = styled.input`
  color: #807e85;
  background: transparent;
  border: none;
  height: 40px;
  font-size: 1.1em;
  margin-left: 10px;
  width: 100%;
`;
