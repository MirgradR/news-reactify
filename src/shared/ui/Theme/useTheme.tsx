import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
