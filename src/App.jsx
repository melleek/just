import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
