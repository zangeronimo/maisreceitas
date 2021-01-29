import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Sidebar, { getSidebarCategories, ICategories } from "@/components/Sidebar";
import api from "@/services/api";
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import { Container, RecipeCardList, RecipeCard, RecipeCardTitle } from '@/styles/pages/Categoria';
import Stars from "@/components/Stars";
import RecipeList from "@/components/RecipeList";
import Link from "next/link";
import Footer from "@/components/Footer";

export interface IRecipe {
    codigo: number;
    categoria: number;
    nome: string;
    capa: string;
    nota: number;
    url: string;
}

interface CategoriesProps {
    categoryName: string;
    recipesWithPhotos: IRecipe[];
    recipes: IRecipe[];
    categories: ICategories[]
}

export default function Categorias({ recipesWithPhotos, recipes, categories, categoryName }: CategoriesProps) {
  const router = useRouter();

  if (router.isFallback || !recipes) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title={`Receitas de ${categoryName}`}
        description={`Curta e aproveite as mais deliciosas receitas em ${categoryName}, isso e muito mais você encontra aqui, confira.`}
      />
      <Header />
      <div className="container">
        <Sidebar categories={categories} />
        <div className="content">
          <h1>{categoryName}</h1>

          {recipesWithPhotos.length > 0 ? (
            <RecipeCardList>
              {recipesWithPhotos.map(recipe => {
                return (
                  <Link key={recipe.codigo} href={`/receita/${recipe.codigo}/${recipe.url}`}>
                    <a title={`Receita de ${recipe.nome}`}>
                      <RecipeCard>
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/${recipe.capa}`} alt={recipe.nome} />
                        <RecipeCardTitle>{recipe.nome}</RecipeCardTitle>
                        <Stars rate={Number(recipe.nota)} />
                      </RecipeCard>
                    </a>
                  </Link>
                )
              })}
            </RecipeCardList>
          ) : <p>Nenhum resultado encontrado, tente realizar uma pesquisa mais simples...</p> }

          {recipes.length > 0 && <RecipeList label="Todas as receitas encontradas..." recipes={recipes} />}
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<CategoriesProps> = async (context) => {
  const { b } = context.params;

  const categories = await getSidebarCategories();

  // Retorna lista de receitas com fotos
  const response = await api.get(`/web/receita/foto?nome=${b}`);
  const recipesWithPhotos = response.data;

  // Retorna todas receitas da categoria
  const responseAll = await api.get(`/web/receita?nome=${b}`);
  const recipes = responseAll.data;

  return {
    props: {
      categoryName: String(b),
      recipesWithPhotos,
      recipes,
      categories,
    },
    revalidate: 3600,
  }
}
