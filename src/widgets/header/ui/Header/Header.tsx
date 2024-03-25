import { Link } from "react-router-dom";
import { ThemeButton } from "@/features/theme";
import { formatDate } from "@/shared/lib/date";
import { useTheme } from "@/shared/ui/Theme";
import styles from "./styles.module.css";

export const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>NEWS REACTIFY</h1>
        </Link>

        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};
