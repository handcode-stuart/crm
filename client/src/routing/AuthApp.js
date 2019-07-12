import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchContacts } from "../actions/contact";
import { fetchCompanies } from "../actions/company";
import { fetchJobs } from "../actions/job";

import AlertBox from "../components/AlertBox";
import AuthNav from "../components/AuthNav";
import AuthSidebar from "../components/AuthSidebar";
import Companies from "../components/pages/auth/Companies";
import Contacts from "../components/pages/auth/Contacts";
import SingleContact from "../components/pages/auth/SingleContact";
import Dashboard from "../components/pages/auth/Dashboard";
import Jobs from "../components/pages/auth/Jobs";
import NewCompany from "../components/pages/auth/NewCompany";
import NewContact from "../components/pages/auth/NewContact";
import NewJob from "../components/pages/auth/NewJob";
import Page from "../components/Page";
import Settings from "../components/pages/auth/Settings";

const AuthApp = ({ fetchContacts, fetchCompanies, fetchJobs }) => {
    useEffect(() => {
        fetchContacts();
        fetchCompanies();
        fetchJobs();
    }, []);
    return (
        <Fragment>
            <AuthNav />
            <AuthSidebar />
            <Page>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/contacts' component={Contacts} />
                    <Route path='/contacts/new' component={NewContact} />
                    <Route path='/contacts/:contact_id' component={SingleContact} />
                    <Route exact path='/companies' component={Companies} />
                    <Route path='/companies/new' component={NewCompany} />
                    <Route exact path='/jobs' component={Jobs} />
                    <Route path='/jobs/new' component={NewJob} />
                    <Route path='/settings' component={Settings} />
                    <Route render={() => <Redirect to='/' />} />
                </Switch>
            </Page>
            <AlertBox />
        </Fragment>
    );
};

export default connect(
    null,
    { fetchContacts, fetchCompanies, fetchJobs },
)(AuthApp);
