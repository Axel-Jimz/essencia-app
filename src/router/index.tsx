import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProtectedAuth from "../pages/protected/ProtectedAuth";
import ProtectedHome from "../pages/protected/ProtectedHome";

import NotFound from "../pages/NotFound";

import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Bookmarks from "../pages/Bookmarks";
import News from "../pages/News";
import Setting from "../pages/Setting";
import Post from "../pages/Post";

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
        path: "/posts/:postId",
        element: <Post />,
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
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);
