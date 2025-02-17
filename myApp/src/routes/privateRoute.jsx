import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/authUtil";

const PrivateRoute = () => {
  const isLogIn = isLoggedIn();

  if (!isLogIn) return <Navigate to="/signin" replace={true} />;

  return <Outlet />;
};

export default PrivateRoute;
