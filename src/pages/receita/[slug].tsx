import SEO from "@/components/SEO";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Container, Galery, RecipeContent } from "@/styles/pages/Receita";
import Stars from "@/components/Stars";
import PhotoGalery from "@/components/PhotoGalery";
import Footer from "@/components/Footer";
import { getRecipeBySlug, IRecipe } from "@/services/recipes";
import Header from "@/components/Header";
import { Aside } from "@/components/Aside";
import Sidebar from "@/components/Sidebar";
import { getSidebarLevels, ILevel } from "@/services/levels";
import { Ratings } from "@/components/Ratings";

interface RecipeProps {
  levels: ILevel[];
  recipe: IRecipe;
  fullURL: string;
}

export default function Recipe({ levels, recipe, fullURL }: RecipeProps) {
  const router = useRouter();

  if (router.isFallback || !recipe) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <SEO
        title={`Receitas de ${recipe.name}`}
        url={fullURL}
        description={`Curta e aproveite esta deliciosa receita de ${recipe.name}, isso e muito mais você encontra aqui, confira.`}
        image={recipe.images.length > 0 ? recipe.images[0].url : null}
      />
      <Header />
      <div className="container">
        <Sidebar categories={levels} />
        <div className="content">
          <h1>
            {recipe.name}
            {recipe.rate && <Stars rate={recipe.rate} />}
            <small>
              {recipe.category.level.name} - {recipe.category.name}
            </small>
          </h1>

          <Galery>
            {recipe.images.length > 0 && (
              <PhotoGalery galery={recipe.images} recipe={recipe.name} />
            )}
          </Galery>

          <strong>Ingredientes</strong>
          <RecipeContent
            dangerouslySetInnerHTML={{ __html: recipe.ingredients }}
          />

          <strong>Modo de Preparo</strong>
          <RecipeContent
            dangerouslySetInnerHTML={{ __html: recipe.preparation }}
          />

          <Ratings recipeId={recipe.id} />

          <Footer />
        </div>
        <Aside />
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RecipeProps> = async (context) => {
  const { slug } = context.params as { slug: string };

  const levels = await getSidebarLevels();
  const recipe = await getRecipeBySlug(slug);

  return {
    props: {
      levels,
      fullURL: `receita/${slug}`,
      recipe,
    },
    revalidate: 1440,
  };
};
