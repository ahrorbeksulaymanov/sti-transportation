import TruckTable from "../components/admin-trucks";
import Login from "../components/login";
import Home from "../pages/home";

// import 
export const public_routes = [
    {
      title: "Main page",
      path: "/",
      component: Home,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
        title: "Login",
        path: "/login",
        component: Login,
        exact: true,
        config: {
          showLink: false,
          structure: "noneLayout",
        },
      }
] 

export const private_rotes = [
    {
      title: "Home page",
      path: "/admin",
      component: TruckTable,
      exact: true,
      config: {
        key: "*",
        showLink: true,
        structure: "layout",
      },
    }
]