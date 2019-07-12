import { TOGGLE_LIGHT_THEME, TOGGLE_DARK_THEME } from "../actions/types";

const initialState = {
    theme: "light",
};

export default function(state = initialState, action) {
    const { type } = action;

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
