import { IRecipe } from "@/services/recipes"
import Link from "next/link"
import React from "react"
import Stars from "../Stars";

import { RecipeCard, Container, RecipeCardTitle } from './styles';

interface IRecipeCardListProps {
  label: string;
  recipes: IRecipe[];
}

export default function RecipeCardList({ recipes, label }: IRecipeCardListProps) {
  return (
    <>
      <h3>{label}</h3>
      <Container>
        {recipes.map(recipe => {
          return (
            <Link key={recipe.id} href={`/receita/${recipe.slug}`}>
              <a title={`Receita de ${recipe.name}`}>
                <RecipeCard>
                  <img src={recipe.images[0].url} alt={recipe.name} />
                  <RecipeCardTitle>{recipe.name}</RecipeCardTitle>
                  <Stars rate={recipe.rate} />
                </RecipeCard>
              </a>
            </Link>
          )
        })}
      </Container>
    </>
  )
}
