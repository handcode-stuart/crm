import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/styles/GlobalStyle";
import { loadUser } from "./actions/auth";
import RouteMapper from "./routing/RouteMapper";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

const theme = {
    primaryColor: "#CCC",
    secondaryColor: "#FFF",
    colorGreyLight: "#e8e8e8",
    colorGreyLightest: "#fcfcfc",
};

// If a token is found in localStorage then set axios headers
if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <Router>
                <ThemeProvider theme={theme}>
                    <RouteMapper />
                </ThemeProvider>
            </Router>
        </Provider>
    );
};

export default App;
