import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Sidebar, { getSidebarCategories, ICategories } from "@/components/Sidebar";
import api, { apiURL } from "@/services/api";
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import { Container, RecipeContent, RecipeCardList, RecipeCard, RecipeCardTitle } from '@/styles/pages/Receita';
import Stars from "@/components/Stars";
import Link from "next/link";
import PhotoGalery, { IPhoto } from "@/components/PhotoGalery";
import Footer from "@/components/Footer";

interface IRecipe {
    codigo: number;
    nome: string;
    html: string;
    fotos: IPhoto[];
    nota: {
      best: number;
      nota: number;
      total: number;
      worst: number;
    };
    receita_categoria: number;
    url?: string;
    capa?: string;
}

interface CategoriesProps {
    categoryName: string;
    recipesWithPhotos: IRecipe[];
    recipe: IRecipe;
    categories: ICategories[]
}

export default function Categorias({ recipesWithPhotos, recipe, categories, categoryName }: CategoriesProps) {
  const router = useRouter();

  if (router.isFallback || !recipe) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title={`Receitas de ${recipe.nome}`}
        description={`Curta e aproveite esta deliciosa receita de ${recipe.nome}, isso e muito mais você encontra aqui, confira.`}
        image={ recipe.fotos.length > 0 ? recipe.fotos[0].url : null }
      />
      <Header />
      <div className="container">
        <Sidebar categories={categories} />
        <div className="content">
          <h1>
            {recipe.nome}
            <Stars rate={recipe.nota.nota} />
            <small>{categoryName}</small>
          </h1>

          {recipe.fotos.length > 0 && <PhotoGalery galery={recipe.fotos} />}
          <RecipeContent  dangerouslySetInnerHTML={{ __html: recipe.html }} />

          {recipesWithPhotos.length > 0 && (
            <>
            <h2>Mais receitas relacionadas...</h2>
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
            </>
          )}
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

  // Retorna receita
  const responseAll = await api.get(`/web/receita/${id}`);
  const recipe = responseAll.data;

  // Retorna lista de receitas com fotos da mesma categoria
  const response = await api.get(`/web/receita/foto/${recipe.receita_categoria}`);
  const recipesWithPhotos = response.data.filter((recipeWithPhoto: IRecipe) => recipeWithPhoto.codigo != recipe.codigo);

  // Retorna o nome da categoria selecionada
  let categoryName = '';
  categories.forEach(nivel => {
    categories.forEach(nivel => {
      nivel.categorias.forEach(category => {
        if (category.codigo === recipe.receita_categoria) {
          categoryName = `${nivel.nome} - ${category.nome}`;
        }
      })
    })
  })

  return {
    props: {
      categoryName,
      recipesWithPhotos,
      recipe,
      categories,
    },
    revalidate: 3600,
  }
}
