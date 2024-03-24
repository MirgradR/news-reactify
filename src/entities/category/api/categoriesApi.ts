import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoriesApiResponse } from "..";
import { NEWS_API_KEY, NEWS_BASE_API_URL } from "@/shared/config";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_BASE_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: NEWS_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
