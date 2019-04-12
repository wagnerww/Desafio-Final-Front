import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #d76273;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const Menu = styled.li`
  display: flex;
  font-weight: bold;
  font-size: 1em;

  ul {
    margin-left: 20px;
    cursor: pointer;
  }
`;
