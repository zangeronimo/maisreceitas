import Link from "next/link";
import Search from "../Search";
import { Container, Logo } from "./styles";

const Header = () => {
    return (
        <Container>
            <Logo>
                <Link href="/">
                    <a title="Página inicial"><img src="/maisreceitas.svg" alt="MaisReceitas" /></a>
                </Link>
            </Logo>
            <Search />
        </Container>
    );
}

export default Header;
