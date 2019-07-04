import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { loadUser } from "./actions/auth";
import RouteMapper from "./routing/RouteMapper";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`;

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
                <RouteMapper />
            </Router>
        </Provider>
    );
};

export default App;
