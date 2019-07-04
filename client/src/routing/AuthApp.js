import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Container from "../components/Container";
import Dashboard from "../components/pages/auth/Dashboard";
import AuthNav from "../components/AuthNav";
import Settings from "../components/pages/auth/Settings";
import Contacts from "../components/pages/auth/Contacts";
import Companies from "../components/pages/auth/Companies";
import Jobs from "../components/pages/auth/Jobs";

const AuthApp = () => {
    return (
        <Container>
            <AuthNav />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/companies' component={Companies} />
                <Route path='/jobs' component={Jobs} />
                <Route path='/settings' component={Settings} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
        </Container>
    );
};

export default AuthApp;
