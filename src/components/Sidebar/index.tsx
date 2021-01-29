
import getToken from "@/lib/token";
import api from "@/services/api";
import { GetServerSideProps } from "next";
import Link from "next/link";
import SidebarItem from "./SidebarItem"
import { Container } from "./styles"

export interface ICategories {
  codigo: number;
  nome: string;
  categorias: {
    codigo: number;
    nome: string;
    url: string;
  }[];
}

export interface ISidebarProps {
  categories?: ICategories[];
}

export default function Sidebar({ categories }: ISidebarProps) {

  if (!categories) {
    return (
      <div>carregando...</div>
    );
  }

  return(
    <Container>
      {categories && categories.map(category => (
        <SidebarItem key={category.codigo} label={category.nome}>
          {category.categorias && category.categorias.map(item => (
            <Link key={item.codigo} href={`/categoria/${item.codigo}/${item.url}`}><a>{item.nome}</a></Link>
          ))}
        </SidebarItem>
      ))}
    </Container>
  )
}

export const getSidebarCategories = async () => {
  await getToken();

  const result = await api.get("/web/receita_categoria/nivel");
  return result.data as ICategories[];
}
