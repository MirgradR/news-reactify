import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "@/entities/category";
import { newsApi, newsModel } from "@/entities/news";

export const rootReducer = combineReducers({
  [newsModel.newsSlice.name]: newsModel.newsSlice.reducer,
  [newsApi.newsApi.reducerPath]: newsApi.newsApi.reducer,
  [categoryApi.categoriesApi.reducerPath]: categoryApi.categoriesApi.reducer,
});
