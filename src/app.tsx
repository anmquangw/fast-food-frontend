import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./config/logging";
import { useSelector, shallowEqual } from "react-redux";
import { authRoutes, noAuthRoutes, anyRoutes } from "./config/routes";

import AuthLayout from "./layouts/auth.layout";
import NoAuthLayout from "./layouts/noAuth.layout";

const Application: React.FunctionComponent<{}> = (props) => {
  const auth: string = useSelector(
    (state: any) => state.authReducer,
    shallowEqual
  );

  useEffect(() => {
    logging.info("Loading application.");
  }, []);

  useEffect(() => {
    // token.remove();
    if (auth) {
      logging.info("User is logged in.");
    } else {
      logging.info("User is not logged in.");
    }
  });

  const renderRoutes = () => {
    // token.remove();
    if (auth)
      return (
        <AuthLayout>
          {authRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </AuthLayout>
      );

    return (
      <NoAuthLayout>
        {noAuthRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </NoAuthLayout>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes()}
        {anyRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
