import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { Landing } from "../screens/Landing";
import { AboutUs } from "../screens/AboutUs";
import { CoursesDetails } from "../screens/CoursesDetails";
import { ArticlesDetails } from "../screens/ArticlesDetails";
import { RegisterForm } from "../components/RegisterForm";
import { NewsArticles } from "../screens/NewsArticles";
import { NotFound } from "../components/NotFound";
import { Login } from "../screens/Login";
import { ForgetPassword } from "../screens/ForgetPassword";
import { MyCourses } from "../components/MyCourses/myCourses";


const RoutesApp = createBrowserRouter([
    
    
      {
        path:'/',
        element: <Landing />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path:'/about',
        element: <AboutUs />,
      },
      {
        path:'/courses-details',
        element: <CoursesDetails />,
      },
      {
        path:'/articles-details',
        element: <ArticlesDetails />,
      },
      {
        path:'/register',
        element: <RegisterForm />,
      },
      {
        path:'/news-articles',
        element: <NewsArticles />,
      },
      {
        path:'/login',
        element: <Login />,
      },
      {
        path:'/forget-password',
        element: <ForgetPassword />,
      },
      {
        path: "/myCourses",
        element: <MyCourses />
      }
    
      ]);
  
  export default RoutesApp