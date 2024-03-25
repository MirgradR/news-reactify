export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (_page: number) => void;
  currentPage: number;
}
