import { useTheme } from "@/shared/ui/Theme";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (_keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="Javascript"
      />
    </div>
  );
};
