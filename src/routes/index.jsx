import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Sheets from "../pages/Sheets";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sheets",
    element: <Sheets />,
    // children: [
    //   {
    //     path: ":projectId/*",
    //     element: <ProjectScreen />,
    //   },
    // ],
  },
  //   重定向
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
