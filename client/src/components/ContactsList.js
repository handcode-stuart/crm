import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/contact";
import Table, { TableHead, TableHeadCell, TableBody, TableRow, TableCell } from "./Table";
import Button from "./Button";

const ContactsList = ({ contact, fetchContacts }) => {
    return (
        <>
            <span onClick={() => fetchContacts()}>Refresh</span>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Action</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contact.loading ? (
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    ) : (
                        contact.contacts.map(contact => (
                            <TableRow key={contact._id}>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>
                                    <Button to={`/contacts/${contact._id}`}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </>
    );
};

const mapStateToProps = state => ({
    contact: state.contact,
});

export default connect(
    mapStateToProps,
    { fetchContacts },
)(ContactsList);
