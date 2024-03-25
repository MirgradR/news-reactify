import { formatTimeAgo } from "@/shared/lib/date";
import { Image } from "@/shared/ui/Image";
import { INews } from "../../model";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

export const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" rel="noreferrer" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return (
              <button key={category} className={styles.active}>
                {category}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
