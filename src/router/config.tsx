import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Identify from "../pages/identify/page";
import Result from "../pages/result/page";
// import Learning from "../pages/learning/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/identify",
    element: <Identify />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  // {
  //   path: "/learning",
  //   element: <Learning />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
