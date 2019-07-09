import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/contact";

const ContactsList = ({ contact, fetchContacts }) => {
    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {contact.loading ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : (
                    contact.contacts.map(contact => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({
    contact: state.contact,
});

export default connect(
    mapStateToProps,
    { fetchContacts },
)(ContactsList);
