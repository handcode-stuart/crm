import React from "react";
import { Link } from "react-router-dom";
import JobsList from "../../JobsList.js";

const Jobs = () => {
    return (
        <div>
            <h1>Jobs</h1>
            <Link to='/jobs/new'>New</Link>
            <JobsList />
        </div>
    );
};

export default Jobs;
