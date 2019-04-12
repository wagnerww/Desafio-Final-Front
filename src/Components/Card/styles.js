import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex: 0 1 30%;
  flex-direction: column;
  width: 290px;
  height: 175px;
  background: #fff;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Image = styled.img`
  min-width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #24212c;
`;

export const Membros = styled.small`
  margin-top: 5px;
  color: #999999;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Inscricao = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: #e5556e;
  color: #fff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
