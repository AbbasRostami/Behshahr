import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PassProvider from "../core/provider/PasswoedProvider";

import Login from "../screens/Login";
import StepOne from "../components/RegisterForm/StepOne";
import StepTwo from "../components/RegisterForm/StepTwo";
import StepThree from "../components/RegisterForm/StepThree";
import ForgetPasswordForm from "../components/ForgetPasswordForm";
import ForgetStepTwo from "../components/ForgetPasswordForm/StepTwo";
import AppLayout from "../userpanel/AppLayout";

// Lazy Loading Components
const CoursesDetails = lazy(() => import("../screens/CoursesDetails"));
const NewsArticles = lazy(() => import("../screens/NewsArticles"));
const NotFound = lazy(() => import("../components/NotFound"));
const ArticlesDetails = lazy(() => import("../screens/ArticlesDetails"));
const AboutUs = lazy(() => import("../screens/AboutUs"));
const MainLayout = lazy(() => import("../screens/layout/MainLayout"));
const Landing = lazy(() => import("../screens/Landing"));
const CoursesList = lazy(() => import("../screens/CoursesList"));

const Home = lazy(() => import("../userpanel/pages/Home"));
const UserProfiles = lazy(() => import("../userpanel/pages/UserProfiles"));
const MyCoursesReserve = lazy(
  () => import("../userpanel/components/BasicTables/MyCoursesReserve")
);
const MyCourses = lazy(
  () => import("../userpanel/components/BasicTables/MyCourses")
);
const MyCoursesFavorite = lazy(
  () => import("../userpanel/components/BasicTables/MyCoursesFavorite")
);
const MyCommets = lazy(
  () => import("../userpanel/components/BasicTables/MyCommets")
);

const RoutesApp = createBrowserRouter([
  {
    element: <MainLayout />,
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
      <Suspense fallback={null}>
        <AppLayout />
      </Suspense>
    ) : (
      <Navigate to="/login" replace />
    ),

    children: [
      {
        index: true,
        path: "/dashboard",
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
      { path: "/profile", element: <UserProfiles /> },
      { path: "/my-courses", element: <MyCourses /> },
      { path: "/my-courses-reserve", element: <MyCoursesReserve /> },
      { path: "/my-courses-favorite", element: <MyCoursesFavorite /> },
      { path: "/my-commets", element: <MyCommets /> },
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
