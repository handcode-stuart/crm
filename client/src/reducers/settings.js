import { TOGGLE_LIGHT_THEME, TOGGLE_DARK_THEME } from "../actions/types";

const initialState = {
    theme: "dark",
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_LIGHT_THEME:
            return {
                ...state,
                theme: "light",
            };

        case TOGGLE_DARK_THEME:
            return {
                ...state,
                theme: "dark",
            };

        default:
            return state;
    }
}
