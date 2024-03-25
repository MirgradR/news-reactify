/* eslint-disable import/no-unresolved */
import { useTheme } from "@/shared/ui/Theme";
import darkThemeSrc from "/theme/dark.png";
import lightThemeSrc from "/theme/light.png";

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? lightThemeSrc : darkThemeSrc}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};
