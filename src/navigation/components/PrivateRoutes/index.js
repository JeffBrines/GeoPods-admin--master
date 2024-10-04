import { Route, Redirect } from "react-router-dom";
import { getToken } from "../../../utils/localStorage";

const PrivateRoutes = (props) => {
  const isAuth = getToken();

  return isAuth ? <Route {...props} /> : <Redirect to={"/signIn"} />;
};

export default PrivateRoutes;
