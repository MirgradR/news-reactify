import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_KEY, NEWS_BASE_API_URL } from "@/shared/config";
import { NewsApiResponse, ParamsType } from "../model";
import { setNews } from "../model/newsSlice";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_BASE_API_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keywords,
        } = params || {};
        return {
          url: "search",
          params: {
            apiKey: NEWS_API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.news));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: "latest-news",
          params: {
            apiKey: NEWS_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
