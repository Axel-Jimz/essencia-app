import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProtectedAuth from "../pages/protected/ProtectedAuth";
import ProtectedHome from "../pages/protected/ProtectedHome";

import NotFound from "../pages/NotFound";

import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Notifications from "../pages/Notifications";
import Bookmarks from "../pages/Bookmarks";
import Shares from "../pages/Shares";
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
        path: "/profile/:profileId",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/shares",
        element: <Shares />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);
