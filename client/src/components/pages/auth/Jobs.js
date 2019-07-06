import React from "react";
import { Link } from "react-router-dom";
import JobsList from "../../JobsList.js";

const Jobs = () => {
    return (
        <div>
            <h3>Jobs</h3>
            <Link to='/jobs/new'>New</Link>
            <JobsList />
        </div>
    );
};

export default Jobs;
