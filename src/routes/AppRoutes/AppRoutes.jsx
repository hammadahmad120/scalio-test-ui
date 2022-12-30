import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
const Home = lazy(() => import("../../containers/Home/Home"));
const Details = lazy(() => import("../../containers/Details/Details"));
const NotFoundPage = lazy(() =>
  import("../../containers/NotFoundPage/NotFoundPage")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/details" exact component={Details} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/home" exact />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
