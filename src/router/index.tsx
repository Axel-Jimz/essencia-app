import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <h1>Error element</h1>,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error element</h1>,
    children: [
      {
        index: true,
        element: <h1>feed</h1>,
      },
      {
        path: "/profile",
        element: <h1>profile</h1>,
      },
      {
        path: "/explore",
        element: <h1>Explorar</h1>,
      },
      {
        path: "/notifications",
        element: <h1>Notificaciones</h1>,
      },
      {
        path: "/setting",
        element: <h1>setting</h1>,
      },
    ],
  },
]);
