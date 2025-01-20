import { createBrowserRouter } from "react-router-dom";
import { CoursesDetails } from "../screens/CoursesDetails";
import { NewsArticles } from "../screens/NewsArticles";
import { PanelLayout } from "../screens/layout/PanelLayout";
import { ForgetStepTwo } from "../components/ForgetPasswordForm/StepTwo";
import PassProvider from "../core/provider/PasswoedProvider";
import { NotFound } from "../components/NotFound";
import { ArticlesDetails } from "../screens/ArticlesDetails";
import { AboutUs } from "../screens/AboutUs";
import { MainLayout } from "../screens/layout/MainLayout";
import { Login } from "../screens/Login";
import { ForgetPasswordForm } from "../components/ForgetPasswordForm";
import { MyReserveCourses } from "../components/MyCourses/myReserveCourses";
import { Favorites } from "../components/MyCourses/favorites";
import { MyCourses } from "../components/MyCourses/myCourses";
import { MyComments } from "../components/MyCourses/myComments";
import { ChangePassword } from "../components/MyCourses/changePassword";
import { EditProfile } from "../components/MyCourses/editProfile";
import { Dashbord } from "../components/MyCourses/dashbord";
import { Landing } from "../screens/Landing";
import { CoursesList } from "../screens/CoursesList";
import { StepOne } from "../components/RegisterForm/StepOne";
import { StepTwo } from "../components/RegisterForm/StepTwo";
import { StepThree } from "../components/RegisterForm/StepThree";

const RoutesApp = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/courses-details/:id",
        element: <CoursesDetails />,
      },
      {
        path: "/courses-list",
        element: <CoursesList />,
      },
      {
        path: "/articles-details/:id",
        element: <ArticlesDetails />,
      }, 

      {
        path: "/news-articles",
        element: <NewsArticles />,
      },
    ],
  },
  {
    path: "/register",
    element: <StepOne />,
  },
  {
    path: "/register-verify",
    element: <StepTwo />,
  },
  {
    path: "/register-final",
    element: <StepThree />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PanelLayout />,
    children: [
      {
        path: "/myCourses",
        element: <MyCourses />,
      },
      {
        path: "/myReserveCourses",
        element: <MyReserveCourses />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/myComments",
        element: <MyComments />,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
    ],
  },
  {
    path: "/forget-password",
    element: (
      <PassProvider>
        {" "}
        <ForgetPasswordForm />{" "}
      </PassProvider>
    ),
  },

  {
    path: "/reset-password/:id",
    element: (
      <PassProvider>
        <ForgetStepTwo />
      </PassProvider>
    ),
  },
]);

export default RoutesApp;
