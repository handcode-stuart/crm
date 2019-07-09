import React from "react";
import { connect } from "react-redux";

const JobsList = ({ job }) => {
    return (
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
    );
};

const mapStateToProps = state => ({
    job: state.job,
});

export default connect(mapStateToProps)(JobsList);
