import React, { useState } from "react";

const CompanyForm = () => {
    const [companyDetails, setCompanyDetails] = useState({ name: "" });
    const handleChange = e => setCompanyDetails({ name: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        // addCompany(companyDetails);
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

export default CompanyForm;
