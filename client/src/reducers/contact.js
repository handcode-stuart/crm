import {
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAIL,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAIL,
    TOGGLE_CONTACT_LOADING,
} from "../actions/types";

const initialState = {
    contacts: [],
    loading: true,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                loading: false,
            };
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: payload,
                loading: false,
            };
        case TOGGLE_CONTACT_LOADING:
            return {
                ...state,
                loading: true,
            };

        case FETCH_CONTACTS_FAIL:
        case ADD_CONTACT_FAIL:
        default:
            return state;
    }
}
