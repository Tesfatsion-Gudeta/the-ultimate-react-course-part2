import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import Userspage from "./Userspage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  //setting up a layout route for protecting certain routes
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <Userspage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
