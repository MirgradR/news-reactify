import { categoryApi } from "@/entities/category";
import { newsApi } from "@/entities/news";
import { useDebounce } from "@/shared/lib/react";
import { useAppSelector } from "@/shared/lib/redux";
import { NewsFilters } from "@/widgets/news";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = newsApi.useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = categoryApi.useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        news={news}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
