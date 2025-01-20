import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ErrorHandler from "./Components/ErrorHandler";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game/:slug",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
