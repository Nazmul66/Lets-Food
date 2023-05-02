import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Blog from "../Components/Pages/Blog/Blog";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FormField from "../Components/Pages/FormField/FormField";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";


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
    {
      path: "/",
      element: <FormField></FormField>,
      children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
      }
      ]
    }
  ]);


export default router;