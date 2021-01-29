import { useSidebar } from "@/hooks/Sidebar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Search from "../Search";
import { Container, Logo } from "./styles";

const Header = () => {
  const { toogleSidebar } = useSidebar();

  return (
    <Container>
      <Logo>
        <Link href="/">
          <a title="Página inicial"><img src="/maisreceitas.png" alt="MaisReceitas" /></a>
        </Link>
        <FaBars onClick={toogleSidebar} />
      </Logo>
      <Search />
    </Container>
  );
}

export default Header;
