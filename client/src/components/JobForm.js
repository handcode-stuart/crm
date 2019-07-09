import React, { useState } from "react";
import { connect } from "react-redux";
import { addJob } from "../actions/job";

const JobForm = ({ addJob }) => {
    const [jobDetails, setJobDetails] = useState({ name: "" });
    const handleChange = e => setJobDetails({ name: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        addJob(jobDetails);
        setJobDetails({ name: "" });
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                name='name'
                value={jobDetails.name}
                placeholder='Job name'
                onChange={e => handleChange(e)}
            />
            <input type='submit' value='Add job' />
        </form>
    );
};

export default connect(
    null,
    { addJob },
)(JobForm);
