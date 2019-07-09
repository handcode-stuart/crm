import React from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/job";
import Table, { TableHead, TableHeadCell, TableBody, TableRow, TableCell } from "./Table";

const JobsList = ({ job, fetchJobs }) => {
    return (
        <>
            <span onClick={() => fetchJobs()}>Refresh</span>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>ID</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {job.loading ? (
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    ) : (
                        job.jobs.map(job => (
                            <TableRow key={job._id}>
                                <TableCell>ID-{job._id}</TableCell>
                                <TableCell>{job.name}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
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
