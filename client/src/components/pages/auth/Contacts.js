import React from "react";
import { Link } from "react-router-dom";
import ContactsList from "../../ContactsList.js";

const Contacts = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <Link to='/contacts/new'>New</Link>
            <ContactsList />
        </div>
    );
};

export default Contacts;
