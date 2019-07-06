import React from "react";
import { Link } from "react-router-dom";
import ContactsList from "../../ContactsList.js";

const Contacts = () => {
    return (
        <div>
            <h3>Contacts</h3>
            <Link to='/contacts/new'>New</Link>
            <ContactsList />
        </div>
    );
};

export default Contacts;
