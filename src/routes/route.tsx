import App from "@/App";
import Login from "@/pages/Login";
import Task from "@/pages/Task";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routes;
