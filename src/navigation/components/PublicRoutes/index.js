import { Route, Redirect } from "react-router-dom";
import { getToken } from "../../../utils/localStorage";

const PublicRoutes = (props) => {
  const isAuth = getToken();

  return !isAuth ? <Route {...props} /> : <Redirect to={"/analytics"} />;
};

export default PublicRoutes;
