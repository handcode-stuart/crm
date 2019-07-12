import React from "react";
import { useFetch } from "../../../hooks";

const SingleCompany = ({ match: { params } }) => {
    const [data, loading] = useFetch("companies", params.company_id);

    return (
        <div>
            <h1>{!loading && data.name}</h1>
        </div>
    );
};

export default SingleCompany;
