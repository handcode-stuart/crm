import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import GuestNav from "../components/GuestNav";
import Login from "../components/pages/guest/Login";
import Register from "../components/pages/guest/Register";

const GuestApp = () => {
    return (
        <Fragment>
            <GuestNav />
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={Register} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
        </Fragment>
    );
};

export default GuestApp;
