import React from "react";
import { Link } from "react-router-dom";
import ContactsList from "../../ContactsList.js";

const Contacts = () => {
    return (
        <div>
            <Link to='/contacts/new'>New</Link>
            <h1>Contacts</h1>
            <ContactsList />
        </div>
    );
};

export default Contacts;
