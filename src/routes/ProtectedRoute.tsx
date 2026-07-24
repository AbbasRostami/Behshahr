import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Fallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
  </div>
);

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<Fallback />}>
      <Outlet />
    </Suspense>
  );
};

export default ProtectedRoute;
