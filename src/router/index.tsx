import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProtectedAuth from "../pages/protected/ProtectedAuth";
import ProtectedHome from "../pages/protected/ProtectedHome";

import NotFound from "../pages/NotFound";

import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import News from "../pages/News";
import Setting from "../pages/Setting";
import Feed from "../pages/Feed";
import Create from "../pages/Create";


export const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <ProtectedAuth>
        <Auth />
      </ProtectedAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: (
      <ProtectedHome>
        <Home />
      </ProtectedHome>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);
