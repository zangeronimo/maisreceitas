import api from "./api";
import { IRecipe } from "./recipes";

export interface IRate {
  id?: string;
  rate?: number;
  name?: string;
  comment?: string;
  recipe?: IRecipe;
  active?: 0 | 1 | 2;
}

type RateData = {
  rate: number;
  name?: string;
  comment?: string;
  recipeId: string;
}

export const getRatings = async (recipe_id: string): Promise<{ data: IRate[] }> => {
  return api.get(`/ratings/${recipe_id}`);
}

export const addRate = async (data: RateData): Promise<{ data: IRate }> => {
  return api.post("/ratings", data);
}
