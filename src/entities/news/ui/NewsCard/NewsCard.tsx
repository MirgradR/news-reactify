import { ReactNode } from "react";
import { formatTimeAgo } from "@/shared/lib/date";
import { Image } from "@/shared/ui/Image";
import { INews } from "../../model";
import styles from "./styles.module.css";

interface Props {
  item: INews;
  type: "banner" | "item";
  viewNewsSlot?: (_news: INews) => ReactNode;
}

export const NewsCard = ({ item, type = "item", viewNewsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>

      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
};
