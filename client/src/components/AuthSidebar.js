import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import ProfileBadge from "./ProfileBadge";

import StyledAuthSidebar from "./styles/AuthSidebar";

const AuthSidebar = ({ logout }) => {
    return (
        <StyledAuthSidebar>
            <ProfileBadge />
            <ul>
                <li>
                    <NavLink activeClassName='active' exact to='/'>
                        <span /> <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/jobs'>
                        <span /> <p>Jobs</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/contacts'>
                        <span /> <p>Contacts</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/companies'>
                        <span /> <p>Companies</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/settings'>
                        <span /> <p>Settings</p>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li onClick={logout}>Logout</li>
            </ul>
        </StyledAuthSidebar>
    );
};

AuthSidebar.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(
    null,
    { logout },
)(AuthSidebar);
