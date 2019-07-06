import React from "react";
import { Link } from "react-router-dom";
import CompaniesList from "../../CompaniesList";

const Companies = () => {
    return (
        <div>
            <h3>Companies</h3>
            <Link to='/companies/new'>New</Link>
            <CompaniesList />
        </div>
    );
};

export default Companies;
