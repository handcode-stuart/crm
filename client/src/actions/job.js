import {
    ADD_JOB_SUCCESS,
    ADD_JOB_FAIL,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAIL,
    TOGGLE_JOB_LOADING,
} from "./types";
import axios from "axios";

export const fetchJobs = () => async dispatch => {
    dispatch({ type: TOGGLE_JOB_LOADING });
    try {
        const res = await axios.get("/api/v1/jobs");

        dispatch({
            type: FETCH_JOBS_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_JOBS_FAIL,
        });
    }
};

export const addJob = job => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    dispatch({ type: TOGGLE_JOB_LOADING });

    try {
        const res = await axios.post("/api/v1/jobs", job, config);

        dispatch({
            type: ADD_JOB_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: ADD_JOB_FAIL,
        });
    }
};
