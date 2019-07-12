import React from "react";
import { useFetch } from "../../../hooks";

const SingleContact = ({ match: { params } }) => {
    const [data, loading] = useFetch("contacts", params.contact_id);

    return (
        <div>
            <h1>{!loading && data.name}</h1>
        </div>
    );
};

export default SingleContact;
