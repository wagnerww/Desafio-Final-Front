import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #d76273;
  height: 75px;
`;

export const Menu = styled.li`
display:flex;
align-items:center;
font-weight:bold;
font-size:1em;


  ul{
    margin-left:20px;
    cursor:pointer;

    &:hover{
      color:#efefef
    }
  }
`;
