import { newsModel } from "@/entities/news";
import { useAppDispatch } from "@/shared/lib/redux";

export const TOTAL_PAGES = 10;

export const usePaginationNews = (filters: newsModel.IFilters) => {
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        newsModel.setFilters({
          key: "page_number",
          value: filters.page_number + 1,
        })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        newsModel.setFilters({
          key: "page_number",
          value: filters.page_number - 1,
        })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(newsModel.setFilters({ key: "page_number", value: pageNumber }));
  };

  return { handleNextPage, handlePreviousPage, handlePageClick };
};
