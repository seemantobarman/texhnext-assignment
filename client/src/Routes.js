import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Single from "./components/Single";
import Multiple from "./components/Multiple";
import AllUsers from "./components/AllUsers";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add-single-user" exact component={Single} />
                <Route path="/add-multiple-users" exact component={Multiple} />
                <Route path="/view-user" exact component={AllUsers} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
