import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PassProvider from "../core/provider/PasswoedProvider";

import StepOne from "../components/Auth/StepOne";
import StepThree from "../components/Auth/StepThree";
import StepTwo from "../components/Auth/StepTwo";
import ForgetPasswordForm from "../components/ForgetPasswordForm";
import ForgetStepTwo from "../components/ForgetPasswordForm/StepTwo";
import Login from "../screens/Login";

const MainLayout = lazy(() => import("../screens/layout/MainLayout"));
const Landing = lazy(() => import("../screens/Landing"));
const CoursesList = lazy(() => import("../screens/CoursesList"));
const CoursesDetails = lazy(() => import("../screens/CoursesDetails"));
const NewsArticles = lazy(() => import("../screens/NewsArticles"));
const ArticlesDetails = lazy(() => import("../screens/ArticlesDetails"));
const AboutUs = lazy(() => import("../screens/AboutUs"));
const NotFound = lazy(() => import("../components/NotFound"));

const AppLayout = lazy(() => import("../userpanel/AppLayout"));
const Home = lazy(() => import("../userpanel/pages/Home"));
const UserProfiles = lazy(() => import("../userpanel/pages/UserProfiles"));
const MyCoursesReserve = lazy(
  () => import("../userpanel/components/BasicTables/MyCoursesReserve"),
);
const MyCourses = lazy(
  () => import("../userpanel/components/BasicTables/MyCourses"),
);
const MyCoursesFavorite = lazy(
  () => import("../userpanel/components/BasicTables/MyCoursesFavorite"),
);
const MyCommets = lazy(
  () => import("../userpanel/components/BasicTables/MyCommets"),
);

const Fallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
  </div>
);

const isAuthenticated = () => Boolean(localStorage.getItem("token"));

const RoutesApp = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/courses-list", element: <CoursesList /> },
      { path: "/courses-details/:id", element: <CoursesDetails /> },
      { path: "/news-articles", element: <NewsArticles /> },
      { path: "/articles-details/:id", element: <ArticlesDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <StepOne /> },
  { path: "/register-verify", element: <StepTwo /> },
  { path: "/register-final", element: <StepThree /> },

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

  {
    element: isAuthenticated() ? (
      <Suspense fallback={<Fallback />}>
        <AppLayout />
      </Suspense>
    ) : (
      <Navigate to="/login" replace />
    ),
    children: [
      { path: "/dashboard", index: true, element: <Home /> },
      { path: "/profile", element: <UserProfiles /> },
      { path: "/my-courses", element: <MyCourses /> },
      { path: "/my-courses-reserve", element: <MyCoursesReserve /> },
      { path: "/my-courses-favorite", element: <MyCoursesFavorite /> },
      { path: "/my-commets", element: <MyCommets /> },
    ],
  },
]);

export default RoutesApp;
