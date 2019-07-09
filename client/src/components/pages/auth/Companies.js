import React from "react";
import Button from "../../Button";
import CompaniesList from "../../CompaniesList";

const Companies = () => {
    return (
        <div>
            <h3>Companies</h3>
            <Button to='/companies/new'>New</Button>
            <CompaniesList />
        </div>
    );
};

export default Companies;
