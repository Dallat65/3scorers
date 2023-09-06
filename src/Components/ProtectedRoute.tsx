import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const isAllowed = localStorage.getItem("accessToken");
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

export default ProtectedRoute;
