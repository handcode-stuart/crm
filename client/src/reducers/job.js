import {
    ADD_JOB_SUCCESS,
    ADD_JOB_FAIL,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAIL,
    TOGGLE_JOB_LOADING,
} from "../actions/types";

const initialState = {
    jobs: [],
    loading: true,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, payload],
                loading: false,
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                jobs: payload,
                loading: false,
            };
        case TOGGLE_JOB_LOADING:
            return {
                ...state,
                loading: true,
            };

        case FETCH_JOBS_FAIL:
        case ADD_JOB_FAIL:
        default:
            return state;
    }
}
