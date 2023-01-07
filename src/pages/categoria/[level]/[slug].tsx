import SEO from "@/components/SEO";
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import { Container } from '@/styles/pages/Categoria';
import RecipeList from "@/components/RecipeList";
import Footer from "@/components/Footer";
import { getCategoryImgRecipes, getRecipesByCategory, IRecipe } from "@/services/recipes";
import { getSidebarLevels, ILevel } from "@/services/levels";
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Aside } from "@/components/Aside";
import { getCategoryBySlug, ICategory } from "@/services/categories";
import RecipeCardList from "@/components/RecipeCardList";

interface CategoriesProps {
  levels: ILevel[];
  category: ICategory;
  fullURL: string;
  recipes: IRecipe[];
  imgRecipes: IRecipe[];
}

export default function Categorias({ levels, category, recipes, imgRecipes, fullURL }: CategoriesProps) {
  const router = useRouter();

  if (router.isFallback || !recipes) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title={`Receitas de ${category.level.name} / ${category.name}`}
        url={fullURL}
        description={`Curta e aproveite as mais deliciosas receitas em ${category.level.name} / ${category.name}, isso e muito mais você encontra aqui, confira.`}
      />
      <Header />
      <div className="container">
        <Sidebar categories={levels} />
        <div className="content">
          <h1>Receitas de {category.level.name} / {category.name}</h1>

          {imgRecipes && (
            <RecipeCardList label="" recipes={imgRecipes}  />
          )}

          <RecipeList recipes={recipes} />

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
  const { level, slug } = context.params as {level: string, slug: string};

  const levels = await getSidebarLevels();
  const category = await getCategoryBySlug(level, slug);

  // Retorna lista de receitas com fotos
  const imgRecipes = await getCategoryImgRecipes(category.id);

  // Retorna todas receitas da categoria
  const recipes = await getRecipesByCategory(category.id);

  return {
    props: {
      levels,
      recipes,
      imgRecipes,
      category,
      fullURL: `categoria/${level}/${slug}`,
    },
    revalidate: 1440,
  }
}
