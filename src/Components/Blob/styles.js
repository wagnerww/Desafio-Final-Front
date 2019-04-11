import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Box = styled.label`
  display: flex;
  border: 4px dashed #fff;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
`;

export const Campo = styled.input`
  position: absolute;
  opacity: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
