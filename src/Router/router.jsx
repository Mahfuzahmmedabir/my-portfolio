import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Home/Home/Home";
import ProjectDetails from "../pages/Projects/projectCard/projectDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <ProjectDetails></ProjectDetails>
      },
    ],
  },
]);

export default router;