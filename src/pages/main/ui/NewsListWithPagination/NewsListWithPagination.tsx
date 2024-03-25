import { newsModel } from "@/entities/news";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widgets/news";
import { usePaginationNews, TOTAL_PAGES } from "../../model";

interface Props {
  filters: newsModel.IFilters;
  news: newsModel.INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
