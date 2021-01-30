import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Sidebar, { getSidebarCategories, ICategories } from '@/components/Sidebar';
import { GetStaticProps } from 'next';
import React from 'react';
import Footer from '@/components/Footer';
import { IRecipe } from './categoria/[id]/[url]';
import api, { apiURL } from '@/services/api';
import Link from 'next/link';
import Stars from '@/components/Stars';

import { Container, RecipeCardList, RecipeCard, RecipeCardTitle } from '@/styles/pages/Home';
import Adsense250x250 from '@/components/Adsense250x250';

interface IHomeProps {
  categories?: ICategories[];
  recipes: IRecipe[];
}

export default function Home({ categories, recipes }: IHomeProps) {
  return (
    <Container>
      <SEO title="MaisReceitas - Os segredos da culinária ao seu alcance!" shouldExcludeTitleSuffix />
      <Header />
      <div className="container">
        <Sidebar categories={categories} />
        <div>
          <RecipeCardList>
            {recipes.map(recipe => {
              return (
                <Link key={recipe.codigo} href={`/receita/${recipe.codigo}/${recipe.url}`}>
                  <a title={`Receita de ${recipe.nome}`}>
                    <RecipeCard>
                      <img src={`${apiURL}/${recipe.capa}`} alt={recipe.nome} />
                      <RecipeCardTitle>{recipe.nome}</RecipeCardTitle>
                      <Stars rate={Number(recipe.nota)} />
                    </RecipeCard>
                  </a>
                </Link>
              )
            })}
          </RecipeCardList>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const categories = await getSidebarCategories();

  const result = await api.get("/web/receita/destaque/6");
  const recipes = result.data;

  return {
    props: {
      categories,
      recipes,
      revalidate: 30,
    }
  }
}
