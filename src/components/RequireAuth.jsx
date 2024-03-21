import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "~/hooks";

export const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
