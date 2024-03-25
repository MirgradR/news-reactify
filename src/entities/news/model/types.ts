import { categoryModel } from "@/entities/category";

export interface IFilters {
  page_number: number;
  page_size: number;
  category: categoryModel.CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface INews {
  author: string;
  category: categoryModel.CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
