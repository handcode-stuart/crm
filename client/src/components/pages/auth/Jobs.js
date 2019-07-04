import React from "react";
import { Link } from "react-router-dom";
import JobsList from "../../JobsList.js";

const Jobs = () => {
    return (
        <div>
            <Link to='/jobs/new'>New</Link>
            <h1>Jobs</h1>
            <JobsList />
        </div>
    );
};

export default Jobs;
