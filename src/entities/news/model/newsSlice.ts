import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INews, IFilters } from "./types";

export const PAGE_SIZE = 10;

interface State {
  news: INews[];
  filters: IFilters;
  currentNews: INews | null;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;
