import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/pages/Home";
import { Category } from "./components/pages/Category";
import { AllProducts } from "./components/pages/AllProducts";
import { NotFound } from "./components/pages/NotFound";

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
          path: "/category",
          element: <Category />
        },
        {
          path: "/allProducts",
          element: <AllProducts />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
