import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import Camera from "@/pages/Camera";
import Moments from "@/pages/Moments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "camera", element: <Camera /> },
      { path: "moments", element: <Moments /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
