import React from "react";
import { connect } from "react-redux";
import { fetchCompanies } from "../actions/company";
import Table, { TableHead, TableHeadCell, TableBody, TableRow, TableCell } from "./Table";
import Button from "./Button";

const CompaniesList = ({ company, fetchCompanies }) => {
    return (
        <>
            <span onClick={() => fetchCompanies()}>Refresh</span>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Actions</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {company.loading ? (
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    ) : (
                        company.companies.map(company => (
                            <TableRow key={company._id}>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>
                                    <Button to={`/companies/${company._id}`}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </>
    );
};

const mapStateToProps = state => ({
    company: state.company,
});

export default connect(
    mapStateToProps,
    { fetchCompanies },
)(CompaniesList);
