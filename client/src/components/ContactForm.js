import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/contact";

const ContactForm = ({ addContact }) => {
    const [contactDetails, setContactDetails] = useState({ name: "" });
    const handleChange = e => setContactDetails({ name: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        addContact(contactDetails);
        setContactDetails({ name: "" });
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                name='name'
                value={contactDetails.name}
                placeholder='Contact name'
                onChange={e => handleChange(e)}
            />
            <input type='submit' value='Add contact' />
        </form>
    );
};

export default connect(
    null,
    { addContact },
)(ContactForm);
