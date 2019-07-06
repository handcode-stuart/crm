import React, { useState } from "react";
import { connect } from "react-redux";
import { addCompany } from "../actions/company";

const CompanyForm = ({ addCompany }) => {
    const [companyDetails, setCompanyDetails] = useState({ name: "" });
    const handleChange = e => setCompanyDetails({ name: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        addCompany(companyDetails);
        setCompanyDetails({ name: "" });
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                name='name'
                value={companyDetails.name}
                placeholder='Company name'
                onChange={e => handleChange(e)}
            />
            <input type='submit' value='Add company' />
        </form>
    );
};

export default connect(
    null,
    { addCompany },
)(CompanyForm);
