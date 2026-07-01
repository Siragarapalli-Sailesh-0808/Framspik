import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
