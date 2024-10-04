import React from "react";
import { Switch, Route } from "react-router-dom";
import { routesPublic, routesPrivate } from "../routes";
import { PrivateRoutes, PublicRoutes } from "../components";
import { NotFound } from "../../pages";

const MainNavigation = () => {
  return (
    <Switch>
      {routesPublic.map((route) => (
        <PublicRoutes
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      {routesPrivate.map((route) => (
        <PrivateRoutes
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}

      <Route exact path="*" component={<NotFound />} />
    </Switch>
  );
};

export default MainNavigation;
