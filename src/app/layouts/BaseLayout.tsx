import { Outlet } from "react-router-dom";
import { useTheme } from "@/shared/ui/Theme";
import { Header } from "@/widgets/header";

export function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
