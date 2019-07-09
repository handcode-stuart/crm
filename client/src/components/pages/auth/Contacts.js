import React from "react";
import ContactsList from "../../ContactsList.js";
import Button from "../../Button";

const Contacts = () => {
    return (
        <div>
            <h3>Contacts</h3>
            <Button to='/contacts/new'>New</Button>
            <ContactsList />
        </div>
    );
};

export default Contacts;
