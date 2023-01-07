import api, { apiURL } from "./api";
import { BaseFilter, PaginationResult } from "./Base";

export interface IRecipe {
  id: string;
  slug: string;
  name: string;
  ingredients: string;
  preparation: string;
  category: {
    id: string;
    name: string;
    level: { name: string }
  };
  images: {
    id: string;
    url: string;
  }[];
  ratings: {
    rate: number;
    comment: string;
  }[];
  rate?: number;
  updated_at: Date;
}

export type RecipeFilter = BaseFilter & {
  params: {
    name?: string;
    categoryId?: string;
    active?: 0 | 1;
  };
};

const getRate = ratings => {
  const sum = ratings.map(rate => rate.rate).reduce((soma, item) => soma + item, 0);
  return sum / ratings.length;
}

export const getRecipes = async (filter?: RecipeFilter): Promise<PaginationResult<IRecipe>> => {
  const result = await api.get("/recipes", filter);
  return result.data;
}
export const getImgRecipes = async (limit: number, name = ''): Promise<IRecipe[]> => {
  const result = await api.get("/recipes/img", {params: { limit, name }});

  result.data.map(recipe => {
    recipe.rate = getRate(recipe.ratings.filter(rate => rate.active === 1));

    if (recipe.images) {
      recipe.images.map(img => img.url = `${apiURL}${img.url}`)
    }
  });
  return result.data;
}
export const getCategoryImgRecipes = async (category: string): Promise<IRecipe[]> => {
  const result = await api.get(`/recipes/img/${category}`);

  result.data.map(recipe => {
    recipe.rate = getRate(recipe.ratings.filter(rate => rate.active === 1));

    if (recipe.images) {
      recipe.images.map(img => img.url = `${apiURL}${img.url}`)
    }
  });
  return result.data;
}
export const getRecipeBySlug = async (slug: string): Promise<IRecipe> => {
  const result = await api.get(`/recipes/${slug}`);
  if (result.data.ratings)
    result.data.rate = getRate(result.data.ratings.filter(rate => rate.active === 1));
  if (result.data.images)
    result.data.images.map(img => img.url = `${apiURL}${img.url}`)
  return result.data;
}
export const getRecipesByCategory = async (category: string): Promise<IRecipe[]> => {
  const result = await api.get(`/recipes/category/${category}`);
  result.data.map(recipe => {
    recipe.rate = getRate(recipe.ratings.filter(rate => rate.active === 1));
  });
  return result.data;
}
