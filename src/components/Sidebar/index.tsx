import { useSidebar } from "@/hooks/sidebar";
import { ILevel } from "@/services/levels";
import Link from "next/link";
import { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { Container, Title, Items } from "./styles";

export interface ISidebarProps {
  categories?: ILevel[];
}

export default function Sidebar({ categories }: ISidebarProps) {
  const { showSidebar, setShowSidebar, toogleSidebar } = useSidebar();

  useEffect(() => {
    if (window) {
      setShowSidebar(window.innerWidth >= 700);
    }
  }, []);

  if (!categories) {
    return <div>carregando...</div>;
  }

  return (
    <Container showSidebar={showSidebar}>
      <Title>
        <h2>Categorias</h2>
        <button onClick={toogleSidebar}>&times;</button>
      </Title>
      <Items>
        {categories &&
          categories.map((category) => (
            <SidebarItem key={category.id} label={category.name}>
              {category.categories &&
                category.categories.map((item) => (
                  <Link
                    key={item.id}
                    href={`/categoria/${category.slug}/${item.slug}`}
                  >
                    <a
                      onClick={() => setShowSidebar(window.innerWidth > 700)}
                      title={item.name}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
            </SidebarItem>
          ))}
      </Items>
    </Container>
  );
}
