import SEO from "@/components/SEO";
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import { Container } from '@/styles/pages/Categoria';
import RecipeList from "@/components/RecipeList";
import Footer from "@/components/Footer";
import { getImgRecipes, getRecipes, IRecipe } from "@/services/recipes";
import RecipeCardList from "@/components/RecipeCardList";
import Header from "@/components/Header";
import { Aside } from "@/components/Aside";
import Sidebar from "@/components/Sidebar";
import { getSidebarLevels, ILevel } from "@/services/levels";

interface CategoriesProps {
  levels: ILevel[];
  categoryName: string;
  fullURL: string;
  recipesWithPhotos: IRecipe[];
  recipes: IRecipe[];
}

export default function Categorias({ levels, recipesWithPhotos, recipes, categoryName, fullURL }: CategoriesProps) {
  const router = useRouter();

  if (router.isFallback || !recipes) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title={`Receitas de ${categoryName}`}
        url={fullURL}
        description={`Curta e aproveite as mais deliciosas receitas em ${categoryName}, isso e muito mais você encontra aqui, confira.`}
      />
      <Header />
      <div className="container">
        <Sidebar categories={levels} />
        <div className="content">
          <h1>Resultado da busca por <strong>{categoryName}</strong></h1>

          {!recipesWithPhotos && !recipes && <p>Nenhum resultado encontrado, tente realizar uma pesquisa mais simples...</p>}

          {recipesWithPhotos && <RecipeCardList label="" recipes={recipesWithPhotos} />}

          {recipes.length > 0 && <RecipeList label="Todas as receitas encontradas..." recipes={recipes} />}
      <Footer />
        </div>
        <Aside />
      </div>
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
  const { b } = context.params as { b: string };

  const levels = await getSidebarLevels();
  const recipesWithPhotos = await getImgRecipes(6, b);
  const recipes = await getRecipes({ params: { name: b, order: { field: 'name', order: 'ASC'}, active: 1 }});

  return {
    props: {
      levels,
      categoryName: String(b),
      fullURL: `busca/${b}`,
      recipesWithPhotos,
      recipes: recipes.data,
    },
    revalidate: 300,
  }
}
