import { useSidebar } from "@/hooks/sidebar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Search from "../Search";

import { ButtonToggle, Container, Logo } from "./styles";

const Header = () => {
  const { toogleSidebar } = useSidebar();

  return (
    <Container>
      <Logo>
        <Link href="/">
          <a title="Ir para a página inicial">
            <img src="/maisreceitas.png" alt="Logo principal MaisReceitas" />
          </a>
        </Link>
      </Logo>
      <ButtonToggle onClick={toogleSidebar} title="Exibir nossas Categorias">
        <FaBars />
      </ButtonToggle>
      <Search />
    </Container>
  );
};

export default Header;
