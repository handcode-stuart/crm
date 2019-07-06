import {
    ADD_COMPANY_SUCCESS,
    ADD_COMPANY_FAIL,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAIL,
    TOGGLE_COMPANY_LOADING,
} from "../actions/types";

const initialState = {
    companies: [],
    loading: true,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY_SUCCESS:
            return {
                ...state,
                companies: [...state.companies, payload],
                loading: false,
            };
        case FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: payload,
                loading: false,
            };
        case TOGGLE_COMPANY_LOADING:
            return {
                ...state,
                loading: true,
            };

        case FETCH_COMPANIES_FAIL:
        case ADD_COMPANY_FAIL:
        default:
            return state;
    }
}
