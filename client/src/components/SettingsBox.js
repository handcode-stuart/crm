import React from "react";
import { connect } from "react-redux";
import { setDarkTheme, setLightTheme } from "../actions/settings";

const SettingsBox = ({ setDarkTheme, setLightTheme }) => {
    const toggleTheme = theme => {
        if (theme === "light") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    };

    return (
        <div>
            Theme: <span onClick={() => toggleTheme("light")}>Light</span>{" "}
            <span onClick={() => toggleTheme("dark")}>Dark</span>
        </div>
    );
};

export default connect(
    null,
    { setDarkTheme, setLightTheme },
)(SettingsBox);
