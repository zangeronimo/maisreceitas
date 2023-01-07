import api from "./api";
import { ILevel } from "./levels";

export interface ICategory {
  slug: string;
  id: string;
  name: string;
  level: ILevel;
}

export const getCategoryBySlug = async (level: string, category: string): Promise<ICategory> => {
  const result = await api.get(`/categories/${level}/${category}`);
  return result.data;
}
