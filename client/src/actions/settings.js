import { TOGGLE_LIGHT_THEME, TOGGLE_DARK_THEME } from "../actions/types";

export const setDarkTheme = () => ({
    type: TOGGLE_DARK_THEME,
});

export const setLightTheme = () => ({
    type: TOGGLE_LIGHT_THEME,
});
