import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  FaHome,
  FaClipboardList,
  FaDumbbell,
  FaBookMedical,
  FaStar
} from "react-icons/fa";

const Nav = styled.nav`
  background: #2563eb;
  padding: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

const Logo = styled.h2`
  color: white;
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;

  flex-wrap: wrap;
`;

const MenuLink = styled(Link)`
  color: white;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 6px;

  transition: .3s;

  &:hover{
    opacity: .8;
  }
`;

export default function Header() {
  return (
    <Nav>

      <Logo>
        🏋️ FitTrack
      </Logo>

      <Menu>

        <MenuLink to="/">
          <FaHome />
          Página Inicial
        </MenuLink>

        <MenuLink to="/cadastro">
          <FaClipboardList />
          Cadastro
        </MenuLink>

        <MenuLink to="/treinos">
          <FaDumbbell />
          Treinos
        </MenuLink>

        <MenuLink to="/exercicios">
          <FaBookMedical />
          Exercícios
        </MenuLink>

        <MenuLink to="/favoritos">
          <FaStar />
          Favoritos
        </MenuLink>

      </Menu>

    </Nav>
  );
}