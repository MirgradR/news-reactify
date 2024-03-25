import { ReactNode } from "react";
import { newsModel, NewsCard } from "@/entities/news";
import { withSkeleton } from "@/shared/ui/Skeleton";
import styles from "./styles.module.css";

interface Props {
  news?: newsModel.INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (_news: newsModel.INews) => ReactNode;
}

const List = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            viewNewsSlot={viewNewsSlot}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

export const NewsList = withSkeleton<Props>(List, 10);
