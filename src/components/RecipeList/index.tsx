import { IRecipe } from "@/services/recipes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Stars from "../Stars";
import { Container, SubTitle, Table, Line } from "./styles";

interface IRecipeListProps {
  label?: string;
  recipes: IRecipe[];
}

export default function RecipeList({ recipes, label = 'Todas as receitas da categoria...' }: IRecipeListProps) {
  if (!recipes) {
    return (
      <div>carregando...</div>
    );
  }

  const route = useRouter();

  const handleTableClick = useCallback((recipe: IRecipe) => {
    route.push(`/receita/${recipe.slug}`);
  }, []);

  return (
    <Container>
      <SubTitle>{label}</SubTitle>
      <Table>
          <tbody>
          { recipes && recipes.map((recipe, index) => (
            <Line key={recipe.id} detach={!!(index%2)} onClick={() => handleTableClick(recipe)}>
              <td>
                <Link href={`/receita/${recipe.slug}`}>
                  <a title={`Receita de ${recipe.name}`}>{recipe.name}</a>
                </Link>
              </td>
              <td>{recipe.rate && <Stars rate={recipe.rate} />}</td>
            </Line>
          ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
      </Table>
    </Container>
  );
}
