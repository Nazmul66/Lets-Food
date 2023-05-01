import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Blog from "../Components/Pages/Blog/Blog";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
      ]
    },
  ]);


export default router;