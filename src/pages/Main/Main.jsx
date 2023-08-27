import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_size: PAGE_SIZE,
    page_number: 1,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handlePageNavigation = (type) => {
    if (type === "next" && filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1);
    } else if (type === "previous" && filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilters("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />

      {data && data.news && data.news.length > 0 ? (
        <NewsBanner isLoading={isLoading} item={data.news[0]} />
      ) : null}

      <Pagination
        handlePageNavigation={handlePageNavigation}
        handlePageClick={(pageNumber) =>
          changeFilters("page_number", pageNumber)
        }
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handlePageNavigation={handlePageNavigation}
        handlePageClick={(pageNumber) =>
          changeFilters("page_number", pageNumber)
        }
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
