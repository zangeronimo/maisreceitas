import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Sidebar, { getSidebarCategories, ICategories } from "@/components/Sidebar";
import api, { apiURL } from "@/services/api";
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import { Container, RecipeCardList, RecipeCard, RecipeCardTitle } from '@/styles/pages/Categoria';
import Stars from "@/components/Stars";
import RecipeList from "@/components/RecipeList";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Adsense250x250 from "@/components/Adsense250x250";

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

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <SEO
        title={`Receitas de ${categoryName}`}
        description={`Curta e aproveite as mais deliciosas receitas em ${categoryName}, isso e muito mais você encontra aqui, confira.`}
      />
      <Header />
      <div className="container">
        <div>
          <Sidebar categories={categories} />
          <Adsense250x250 />
        </div>
        <div className="content">
          <h1>{categoryName}</h1>

          <RecipeCardList>
            {recipesWithPhotos.map(recipe => {
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

          <RecipeList recipes={recipes} />
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
  const { id } = context.params;

  const categories = await getSidebarCategories();

  // Retorna o nome da categoria selecionada
  let categoryName = '';
  categories.forEach(nivel => {
    categories.forEach(nivel => {
      nivel.categorias.forEach(category => {
        if (category.codigo === Number(id)) {
          categoryName = `${nivel.nome} - ${category.nome}`;
        }
      })
    })
  })

  // Retorna lista de receitas com fotos
  const response = await api.get(`/web/receita/foto/${id}`);
  const recipesWithPhotos = response.data;

  // Retorna todas receitas da categoria
  const responseAll = await api.get(`/web/receita/categoria/${id}`);
  const recipes = responseAll.data;

  return {
    props: {
      categoryName,
      recipesWithPhotos,
      recipes,
      categories,
    },
    revalidate: 30,
  }
}
