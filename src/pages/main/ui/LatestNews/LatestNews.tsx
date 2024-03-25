import { useNavigate } from "react-router-dom";
import { newsModel, newsApi } from "@/entities/news";
import { useAppDispatch } from "@/shared/lib/redux";
import { NewsList } from "@/widgets/news";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = newsApi.useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: newsModel.INews) => {
    dispatch(newsModel.setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: newsModel.INews) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
        )}
      />
    </section>
  );
};

export default LatestNews;
