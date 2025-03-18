import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// Pages :
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
// Pages : Using Private Route :
import Secret from "../pages/Shared/Secret/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "menu",
        element: <Menu></Menu>,
      },

      {
        path: "order/:category",
        element: <Order></Order>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
