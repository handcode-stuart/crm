import React from "react";
import { connect } from "react-redux";

const ContactsList = ({ contact }) => {
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

export default connect(mapStateToProps)(ContactsList);
