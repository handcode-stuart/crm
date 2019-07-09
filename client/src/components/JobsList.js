import React from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/job";

const JobsList = ({ job, fetchJobs }) => {
    return (
        <>
            <span onClick={() => fetchJobs()}>Refresh</span>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {job.loading ? (
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    ) : (
                        job.jobs.map(job => (
                            <tr key={job._id}>
                                <td>{job.name}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = state => ({
    job: state.job,
});

export default connect(
    mapStateToProps,
    { fetchJobs },
)(JobsList);
