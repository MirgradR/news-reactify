import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "@/entities/category";
import { newsApi } from "@/entities/news";
import { rootReducer } from "./appReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.newsApi.middleware,
      categoryApi.categoriesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
