import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

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
import SingleJob from "../components/pages/auth/SingleJob";
import NewCompany from "../components/pages/auth/NewCompany";
import NewContact from "../components/pages/auth/NewContact";
import NewJob from "../components/pages/auth/NewJob";
import Page from "../components/Page";
import Settings from "../components/pages/auth/Settings";

const lightTheme = {
    backgroundColor: "#fff",
    copyColor: "#323135",
    colorGreyLight: "#e8e8e8",
    colorGreyLightest: "#fcfcfc",
    colorGreen: "#30a230",
    colorRed: "#bf2828",
    colorWhite: "#fff",
};

const darkTheme = {
    backgroundColor: "#323135",
    copyColor: "#fff",
    colorGreyLight: "#e8e8e8",
    colorGreyLightest: "#fcfcfc",
    colorGreen: "#30a230",
    colorRed: "#bf2828",
    colorWhite: "#fff",
};

const AuthApp = ({ settings: { theme }, fetchContacts, fetchCompanies, fetchJobs }) => {
    useEffect(() => {
        fetchContacts();
        fetchCompanies();
        fetchJobs();
    }, []);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
                        <Route path='/jobs/:job_id' component={SingleJob} />
                        <Route path='/settings' component={Settings} />
                        <Route render={() => <Redirect to='/' />} />
                    </Switch>
                </Page>
                <AlertBox />
            </Fragment>
        </ThemeProvider>
    );
};

const mapStateToProps = state => ({
    settings: state.settings,
});

export default connect(
    mapStateToProps,
    { fetchContacts, fetchCompanies, fetchJobs },
)(AuthApp);
