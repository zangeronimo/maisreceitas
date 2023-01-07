import SEO from "@/components/SEO";
import { GetServerSideProps } from "next";
import React from "react";
import Footer from "@/components/Footer";

import { Container } from "@/styles/pages/Home";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Aside } from "@/components/Aside";
import { getImgRecipes, getRecipes, IRecipe } from "@/services/recipes";
import { PaginationResult } from "@/services/Base";
import { getSidebarLevels, ILevel } from "@/services/levels";
import RecipeList from "@/components/RecipeList";
import RecipeCardList from "@/components/RecipeCardList";

interface IHomeProps {
  levels: ILevel[];
  lastRecipes: PaginationResult<IRecipe>;
  imgRecipes: IRecipe[];
}

export default function Home({ levels, lastRecipes, imgRecipes }: IHomeProps) {
  return (
    <Container>
      <SEO
        title="MaisReceitas - Os segredos da culinária ao seu alcance!"
        shouldExcludeTitleSuffix
        url=""
      />

      <Header />
      <div className="container">
        <Sidebar categories={levels} />
        <div className="content">
          <RecipeList label="Novas Receitas" recipes={lastRecipes.data} />

          <RecipeCardList label="Receitas em Destaques" recipes={imgRecipes} />

          <Footer />
        </div>
        <Aside />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const levels = await getSidebarLevels();
  const lastRecipes = await getRecipes({
    params: {
      order: { field: "updatedAt", order: "DESC" },
      active: 1,
      perPage: 15,
    },
  });
  const imgRecipes = await getImgRecipes(6);

  return {
    props: {
      levels,
      lastRecipes,
      imgRecipes,
    },
  };
};
