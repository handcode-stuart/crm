import React from "react";
import { Link } from "react-router-dom";
import CompaniesList from "../../CompaniesList";

const Companies = () => {
    return (
        <div>
            <h1>Companies</h1>
            <Link to='/companies/new'>New</Link>
            <CompaniesList />
        </div>
    );
};

export default Companies;
