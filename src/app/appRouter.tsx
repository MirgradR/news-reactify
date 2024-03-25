import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { NewsPage } from "@/pages/news";
import { BaseLayout } from "./layouts/BaseLayout";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/news/:id", element: <NewsPage /> },
    ],
  },
]);
