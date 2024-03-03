import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import DashBord from "@/pages/admin/DashBord";
import ServicesList from "@/pages/admin/ServicesList";
import Home from "@/pages/home";

import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/dashboard"}></Navigate>,
      },
      {
        path: "dashboard",
        element: <DashBord></DashBord>,
      },
      {
        path: "service-list",
        element: <ServicesList></ServicesList>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
