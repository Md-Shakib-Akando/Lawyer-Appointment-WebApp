import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";

import ContactUs from "../Pages/ContactUs/ContactUs";



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement:<Error/>,
   
    children: [
      {
        index: true, path: '/',
        Component: Home,
        hydrateFallbackElement: <p>Loading...</p>,
        loader: () => fetch('../Lawyer.json'),
      },
      {
        path: '/Bookings',
        Component: Bookings,
      },
      
      {
        path: '/Blogs',
        Component: Blogs,
        hydrateFallbackElement: <p>Loading...</p>,
        loader: () => fetch('../Blogs.json'),

      },
      {
        path: '/LawyerDetails/:id',
        Component: LawyerDetails,
        hydrateFallbackElement: <p>Loading...</p>,
        loader: () => fetch('../Lawyer.json'),
      },
      {
        path:'/Contact',
        Component: ContactUs,
      }

    ]

  },
  {
    path:'/Error/:id',
    Component: Error,
  }
]);

export default router;