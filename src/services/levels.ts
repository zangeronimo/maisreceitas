import api from "./api";
import { ICategory } from "./categories";

export interface ILevel {
  slug: string;
  id: string;
  name: string;
  categories: ICategory[];
}

export const getSidebarLevels = async () => {
  const result = await api.get("/levels");
  return result.data;
}
