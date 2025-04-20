import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";



const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true, path:'/',
          Component: Home,
        },
        {
          path:'/Bookings',
          Component: Bookings,
        },
        {
          path:'/Blogs',
          Component: Blogs,
        },
        {
          path:'/Error',
          Component: Error,
        },
       
        
      ]
    },
  ]);

export default router;