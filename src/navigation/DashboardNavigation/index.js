import { Switch, Route, Redirect } from "react-router-dom";
import { routesDashboard } from "../routes";
import { PrivateRoutes } from "../components";
import { NotFound } from "../../pages";

const DashboardNavigation = () => {
  return (
    <Switch>
      {routesDashboard.map((route) => (
        <PrivateRoutes
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}

      <Route exact path="/">
        <Redirect to="/analytics" />
      </Route>

      <Route exact path="*" component={() => <>404</>} />
    </Switch>
  );
};

export default DashboardNavigation;
