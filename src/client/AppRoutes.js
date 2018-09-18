import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import AppLayout from './container/AppLayout/index';
import LandingPage from './container/Home/LandingPage';
import Developers from './container/Developer/Developers';
import Developer from './container/Developer/Developer';
import Create from './container/Developer/Create';
import NotFound from './components/NotFound';

class AppRoutes extends Component {
  render() {

    return (
        <BrowserRouter>
            <AppLayout>
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        component={LandingPage}
                    />
                    <Route
                    exact
                    path = {"/create"}
                    component = {Create} 
                    />
                    <Route
                        exact
                        path={"/developers"}
                        component={Developers}
                    />
                    <Route
                        exact
                        path={"/developers/:username"}
                        component={Developer}
                    />
                    <Route component = {NotFound} />
                </Switch>
            </AppLayout>
        </BrowserRouter>
    );
  }
}

export default AppRoutes;