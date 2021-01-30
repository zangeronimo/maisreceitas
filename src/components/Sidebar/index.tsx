
import { useSidebar } from "@/hooks/Sidebar";
import getToken from "@/lib/token";
import api from "@/services/api";
import Link from "next/link";
import { useEffect } from "react";
import AdsenseSidebar from "../AdsenseSidebar";
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
  const { showSidebar, setShowSidebar } = useSidebar();

  useEffect(() => {
    if (window) {
      setShowSidebar(window.innerWidth > 700);
    }
  }, []);

  if (!categories) {
    return (
      <div>carregando...</div>
    );
  }

  return(
    <Container showSidebar={showSidebar}>
      {categories && categories.map(category => (
        <SidebarItem key={category.codigo} label={category.nome}>
          {category.categorias && category.categorias.map(item => (
            <Link key={item.codigo} href={`/categoria/${item.codigo}/${item.url}`}><a onClick={() => setShowSidebar(window.innerWidth > 700)} title={item.nome}>{item.nome}</a></Link>
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
