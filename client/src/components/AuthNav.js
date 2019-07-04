import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import styled from "styled-components";
import Container from "../components/Container";

const StyledNav = styled.nav`
    width: 100%;
    padding: 12px 0;
    background-color: ${props => props.theme.primaryColor};

    > div {
        display: flex;
        justify-content: flex-end;
    }

    ul {
        list-style-type: none;
        margin: 0;

        li {
            display: inline-block;
            margin-left: 12px;

            a {
                margin: 0;
                color: ${props => props.theme.secondaryColor};
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const AuthNav = ({ logout }) => {
    return (
        <StyledNav>
            <Container>
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
                    <li onClick={logout}>Logout</li>
                </ul>
            </Container>
        </StyledNav>
    );
};

AuthNav.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(
    null,
    { logout },
)(AuthNav);
