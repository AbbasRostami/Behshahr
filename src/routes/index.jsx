import { createBrowserRouter, Router } from "react-router-dom";
import App from "../app";
import { Landing } from "../screens/Landing";
import { AboutUs } from "../screens/AboutUs";
import { CoursesDetails } from "../screens/CoursesDetails";
import { ArticlesDetails } from "../screens/ArticlesDetails";
import { NewsArticles } from "../screens/NewsArticles";
import { NotFound } from "../components/NotFound";
import { Login } from "../screens/Login";
import { ForgetPassword } from "../screens/ForgetPassword";
import { StepOne } from "../components/RegisterForm/StepOne";
import { StepTwo } from "../components/RegisterForm/StepTwo";
import { StepThree } from "../components/RegisterForm/StepThree";


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
      // Register Routers
      {
        path:'/register',
        element: <StepOne />,
      },
      {
        path:'/register-verify',
        element: <StepTwo />,
      },
      {
        path:'/register-final',
        element: <StepThree />,
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
    
    
      ]);
  
  export default RoutesApp