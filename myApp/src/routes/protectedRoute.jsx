import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/authUtil";

const ProtectedRoute = () => {
  const isLogIn = isLoggedIn();

  if (isLogIn) return <Navigate to="/" replace={true} />;

  return <Outlet />;
};

export default ProtectedRoute;
