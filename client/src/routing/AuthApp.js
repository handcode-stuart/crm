import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Page from "../components/Page";
import Dashboard from "../components/pages/auth/Dashboard";
import AuthNav from "../components/AuthNav";
import AuthSidebar from "../components/AuthSidebar";
import Settings from "../components/pages/auth/Settings";
import Contacts from "../components/pages/auth/Contacts";
import NewContact from "../components/pages/auth/NewContact";
import NewJob from "../components/pages/auth/NewJob";
import NewCompany from "../components/pages/auth/NewCompany";
import Companies from "../components/pages/auth/Companies";
import Jobs from "../components/pages/auth/Jobs";

const AuthApp = () => {
    return (
        <Fragment>
            <AuthNav />
            <AuthSidebar />
            <Page>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/contacts' component={Contacts} />
                    <Route path='/contacts/new' component={NewContact} />
                    <Route exact path='/companies' component={Companies} />
                    <Route path='/companies/new' component={NewCompany} />
                    <Route exact path='/jobs' component={Jobs} />
                    <Route path='/jobs/new' component={NewJob} />
                    <Route path='/settings' component={Settings} />
                    <Route render={() => <Redirect to='/' />} />
                </Switch>
            </Page>
        </Fragment>
    );
};

export default AuthApp;
