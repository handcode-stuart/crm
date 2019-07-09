import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import styled from "styled-components";

const StyledAuthSidebar = styled.nav`
    position: absolute;
    padding: 85px 30px 20px;
    top: 0;
    left: 0;
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid ${props => props.theme.colorGreyLight};

    ul {
        list-style-type: none;
        margin: 20px 0 0;
        padding: 0;

        &:first-child {
            li {
                margin-bottom: 20px;
            }
        }

        &:last-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        li {
            display: block;
            font-size: 14px;

            a {
                margin: 0;
                color: #000;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const AuthSidebar = ({ logout }) => {
    return (
        <StyledAuthSidebar>
            <ul>
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/jobs'>Jobs</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
                <li>
                    <Link to='/companies'>Companies</Link>
                </li>
                <li>
                    <Link to='/settings'>Settings</Link>
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
