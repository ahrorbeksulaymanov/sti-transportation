import BlogsTable from "../components/admin-blogs";
import CommentsTable from "../components/admin-comments";
import TruckTable from "../components/admin-trucks";
import Login from "../components/login";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Purchase from "../pages/purchase";

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
      title: "Purchase",
      path: "/purchase",
      component: Purchase,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
      title: "Blogs",
      path: "/blogs",
      component: Blogs,
      exact: true,
      config: {
        showLink: false,
        structure: "clientLayout",
      },
    },
    {
      title: "Contact",
      path: "/contact",
      component: Contact,
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
    },
    {
      title: "Comments",
      path: "/comments",
      component: CommentsTable,
      exact: true,
      config: {
        key: "*",
        showLink: true,
        structure: "layout",
      },
    },
    {
      title: "Blogs",
      path: "/blogs-list",
      component: BlogsTable,
      exact: true,
      config: {
        key: "*",
        showLink: true,
        structure: "layout",
      },
    }
]