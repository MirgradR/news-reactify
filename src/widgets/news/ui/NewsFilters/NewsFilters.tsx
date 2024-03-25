import { categoryModel } from "@/entities/category";
import { newsModel } from "@/entities/news";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { useAppDispatch } from "@/shared/lib/redux";
import { useTheme } from "@/shared/ui/Theme";
import styles from "./styles.module.css";

interface Props {
  filters: newsModel.IFilters;
  categories: categoryModel.CategoriesType[];
}

export const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(
                newsModel.setFilters({ key: "category", value: category })
              )
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(newsModel.setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};
