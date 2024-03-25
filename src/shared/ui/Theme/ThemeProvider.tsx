import { ReactNode, createContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
