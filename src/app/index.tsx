import "./App.css";
import { RouterProvider } from "react-router-dom";
import RoutesApp from "../routes";
import { ThemeProvider } from "../context/context/ThemeContext";
import { ProgressBar } from "../components/common/ProgressBar";
import { Suspense } from "react";

function AppContent() {
  const hiddenProgressRoutes = [
    "/login",
    "/register",
    "/register-verify",
    "/register-final",
    "/forget-password",
    "/reset-password",
    "/dashboard",
    "/profile",
    "/my-courses",
    "/my-courses-reserve",
    "/my-courses-favorite",
    "/my-commets",
  ];

  const showProgressBar = !hiddenProgressRoutes.some((route) =>
    window.location.pathname.startsWith(route)
  );

  return (
    <>
      {showProgressBar && <ProgressBar />}
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={null}>
        <AppContent />
      </Suspense>
    </ThemeProvider>
  );
}
