import React from "react";
import { Link } from "react-router-dom";
import CompaniesList from "../../CompaniesList";

const Companies = () => {
    return (
        <div>
            <Link to='/companies/new'>New</Link>
            <h1>Companies</h1>
            <CompaniesList />
        </div>
    );
};

export default Companies;
