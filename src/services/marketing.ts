import api from "./api";
import { PaginationResult } from "./Base";

export interface ICategory {
  slug: string;
  id: string;
  name: string;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  slug: string;
  banner: string;
  title: string;
  url: string;
  content: string;
  category: { id: string, name: string };
}

export const getCategories = async (): Promise<ICategory[]> => {
  const result = await api.get("/marketing/categories");
  return result.data;
}

export const getProductBySlug = async (slug: string): Promise<IProduct> => {
  const result = await api.get(`/marketing/product/${slug}`);

  return result.data;
}
