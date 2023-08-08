import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutAdmin from "./components/Layouts/LayoutAdmin";
import LayoutWebsite from "./components/Layouts/LayoutWebsite";
import ProductDetail from "./pages/admin/About";
import Dashboard from "./pages/admin/dashboard/index";
import HomePage from "./pages/admin/Home";
import AdminAdd from "./pages/admin/product/add";
import AdminEdit from "./pages/admin/product/edit";
import AdminProduct from "./pages/admin/product/index";
import Signin from "./pages/admin/signin/index";
import Signup from "./pages/admin/signup/index";

export const router = createBrowserRouter([
  { path: "/", element: <LayoutWebsite />, children:[{index:true , element:<Navigate to="home"/>},
  { path: "home", element:<HomePage /> },
  { path: "products/:idProduct", element:<ProductDetail />},
  { path: "/signup", element:<Signup/>},
  { path: "/signin", element:<Signin />},

]},
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [{ index: true, element: <Navigate to="dashboard" /> }, {
        path:'dashboard',
        element:<Dashboard />
    },
    {
      path:"product",
      element:<AdminProduct />
    },
    {
      path:"product/add",
      element:<AdminAdd />
    },
    {
      path:"product/:idProduct/edit",
      element:<AdminEdit />
    }
  ],
  },
]);
