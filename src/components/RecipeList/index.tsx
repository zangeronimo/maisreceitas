import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Stars from "../Stars";
import { Container, SubTitle, Table, TitleLine, Line } from "./styles";

interface IRecipe {
  codigo: number;
  nota: number;
  nome: string;
  url: string;
}

interface IRecipeListProps {
  recipes: IRecipe[];
}

export default function RecipeList({ recipes }: IRecipeListProps) {
  if (!recipes) {
    return (
      <div>carregando...</div>
    );
  }

  const route = useRouter();

  const handleTableClick = useCallback((recipe: IRecipe) => {
    route.push(`/receita/${recipe.codigo}/${recipe.url}`);
  }, []);

  return (
    <Container>
      <SubTitle>Todas as receitas da categoria...</SubTitle>
      <Table>
        <thead>
          <TitleLine>
            <th>Receita</th>
            <th>Nota</th>
          </TitleLine>
        </thead>
          <tbody>
          { recipes && recipes.map((recipe, index) => (
            <Line key={recipe.codigo} detach={!!(index%2)} onClick={() => handleTableClick(recipe)}>
              <td>
                <Link href={`/receita/${recipe.codigo}/${recipe.url}`}>
                  <a title={`Receita de ${recipe.nome}`}>{recipe.nome}</a>
                </Link>
              </td>
              <td><Stars rate={recipe.nota} /></td>
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
