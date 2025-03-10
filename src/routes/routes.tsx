import MainLayout from "@/layouts/main-layout";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import { Index } from "@/pages/siswa/Index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Menggunakan layout
    children: [
      { index: true, element: <HomePage /> },
      { path: "siswa", element: <Index /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // 404 Page
]);

export default router;
