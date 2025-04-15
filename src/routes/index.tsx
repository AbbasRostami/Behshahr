import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PassProvider from "../core/provider/PasswoedProvider";
import PageSkeleton from "../components/common/Skeleton";

import Login from "../screens/Login";
import StepOne from "../components/RegisterForm/StepOne";
import StepTwo from "../components/RegisterForm/StepTwo";
import StepThree from "../components/RegisterForm/StepThree";
import ForgetPasswordForm from "../components/ForgetPasswordForm";
import ForgetStepTwo from "../components/ForgetPasswordForm/StepTwo";
import AppLayout from "../layout/AppLayout";
import Home from "../layout/pages/Home";
import UserProfiles from "../layout/pages/UserProfiles";
import FormElements from "../layout/pages/FormElements";
import BasicTables from "../layout/pages/BasicTables";

// Lazy Loading Components
const CoursesDetails = lazy(() => import("../screens/CoursesDetails"));
const NewsArticles = lazy(() => import("../screens/NewsArticles"));
const NotFound = lazy(() => import("../components/NotFound"));
const ArticlesDetails = lazy(() => import("../screens/ArticlesDetails"));
const AboutUs = lazy(() => import("../screens/AboutUs"));
const MainLayout = lazy(() => import("../screens/layout/MainLayout"));
const Landing = lazy(() => import("../screens/Landing"));
const CoursesList = lazy(() => import("../screens/CoursesList"));

const RoutesApp = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Landing /> },
      { path: "*", element: <NotFound /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/courses-details/:id", element: <CoursesDetails /> },
      { path: "/courses-list", element: <CoursesList /> },
      { path: "/articles-details/:id", element: <ArticlesDetails /> },
      { path: "/news-articles", element: <NewsArticles /> },
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
    element: localStorage.getItem("token") ? (
      <Suspense fallback={<PageSkeleton />}>
        <AppLayout />
      </Suspense>
    ) : (
      <Navigate to="/login" replace />
    ),

    children: [
      { index: true, path: "/dashbord", element: <Home /> },

      { path: "/profile", element: <UserProfiles /> },

      { path: "/form-elements", element: <FormElements /> },

      { path: "/basic-tables", element: <BasicTables /> },
    ],
  },
  {
    path: "/forget-password",
    element: (
      <PassProvider>
        <ForgetPasswordForm />
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
