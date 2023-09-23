import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (arg0: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
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

export default Search;
