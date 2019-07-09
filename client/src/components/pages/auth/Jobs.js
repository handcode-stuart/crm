import React from "react";
import Button from "../../Button";
import JobsList from "../../JobsList.js";

const Jobs = () => {
    return (
        <div>
            <h3>Jobs</h3>
            <Button to='/jobs/new'>New</Button>
            <JobsList />
        </div>
    );
};

export default Jobs;
