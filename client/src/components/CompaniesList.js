import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCompanies } from "../actions/company";

const CompaniesList = ({ company, fetchCompanies }) => {
    useEffect(() => {
        fetchCompanies();
    }, [fetchCompanies]);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {company.loading ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : (
                    company.companies.map(company => (
                        <tr key={company._id}>
                            <td>{company.name}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({
    company: state.company,
});

export default connect(
    mapStateToProps,
    { fetchCompanies },
)(CompaniesList);
