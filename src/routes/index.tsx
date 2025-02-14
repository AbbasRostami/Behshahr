import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PassProvider from "../core/provider/PasswoedProvider";
import PageSkeleton from "../components/common/Skeleton";

// Lazy Loading Components
const CoursesDetails = lazy(() => import("../screens/CoursesDetails"));
const NewsArticles = lazy(() => import("../screens/NewsArticles"));
const PanelLayout = lazy(() => import("../screens/layout/PanelLayout"));
const ForgetStepTwo = lazy(() => import("../components/ForgetPasswordForm/StepTwo"));
const NotFound = lazy(() => import("../components/NotFound"));
const ArticlesDetails = lazy(() => import("../screens/ArticlesDetails"));
const AboutUs = lazy(() => import("../screens/AboutUs"));
const MainLayout = lazy(() => import("../screens/layout/MainLayout"));
const Login = lazy(() => import("../screens/Login"));
const ForgetPasswordForm = lazy(() => import("../components/ForgetPasswordForm"));
const MyReserveCourses = lazy(() => import("../components/MyCourses/myReserveCourses"));
const Favorites = lazy(() => import("../components/MyCourses/favorites"));
const MyCourses = lazy(() => import("../components/MyCourses/myCourses"));
const MyComments = lazy(() => import("../components/MyCourses/myComments"));
const ChangePassword = lazy(() => import("../components/MyCourses/changePassword"));
const EditProfile = lazy(() => import("../components/MyCourses/editProfile"));
const Dashbord = lazy(() => import("../components/MyCourses/dashbord"));
const Landing = lazy(() => import("../screens/Landing"));
const CoursesList = lazy(() => import("../screens/CoursesList"));
const StepOne = lazy(() => import("../components/RegisterForm/StepOne"));
const StepTwo = lazy(() => import("../components/RegisterForm/StepTwo"));
const StepThree = lazy(() => import("../components/RegisterForm/StepThree"));

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
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <StepOne />
      </Suspense>
    ),
  },
  {
    path: "/register-verify",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <StepTwo />
      </Suspense>
    ),
  },
  {
    path: "/register-final",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <StepThree />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <Login />
      </Suspense>
    ),
  },
  {
    element: localStorage.getItem("token") ? (
      <Suspense fallback={<PageSkeleton />}>
        <PanelLayout />
      </Suspense>
    ) : (
      <Navigate to="/login" replace />
    ),
    children: [
      { path: "/myCourses", element: <MyCourses /> },
      { path: "/myReserveCourses", element: <MyReserveCourses /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/myComments", element: <MyComments /> },
      { path: "/changePassword", element: <ChangePassword /> },
      { path: "/editProfile", element: <EditProfile /> },
      { path: "/dashbord", element: <Dashbord /> },
    ],
  },
  {
    path: "/forget-password",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <PassProvider>
          <ForgetPasswordForm />
        </PassProvider>
      </Suspense>
    ),
  },
  {
    path: "/reset-password/:id",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <PassProvider>
          <ForgetStepTwo />
        </PassProvider>
      </Suspense>
    ),
  },
]);

export default RoutesApp;
