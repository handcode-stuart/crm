import {
    ADD_COMPANY_SUCCESS,
    ADD_COMPANY_FAIL,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAIL,
} from "./types";
import axios from "axios";

export const fetchCompanies = () => async dispatch => {
    try {
        const res = await axios.get("/api/v1/companies");

        dispatch({
            type: FETCH_COMPANIES_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_COMPANIES_FAIL,
        });
    }
};

export const addCompany = company => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("/api/v1/companies", company, config);

        dispatch({
            type: ADD_COMPANY_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: ADD_COMPANY_FAIL,
        });
    }
};
