import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import styled from "styled-components";

const StyledAuthSidebar = styled.nav`
    position: absolute;
    padding: 85px 0 20px;
    top: 0;
    left: 0;
    width: 65px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid ${props => props.theme.colorGreyLight};

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;

        &:first-child {
            li {
                margin: 14px 0;
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
            font-size: 20px;

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

const AuthSidebar = ({ logout }) => {
    return (
        <StyledAuthSidebar>
            <ul>
                <li>
                    <Link to='/'>🏠</Link>
                </li>
                <li>
                    <Link to='/jobs'>💼</Link>
                </li>
                <li>
                    <Link to='/contacts'>👩🏻‍💼</Link>
                </li>
                <li>
                    <Link to='/companies'>🏦</Link>
                </li>
                <li>
                    <Link to='/settings'>⚙️</Link>
                </li>
            </ul>
            <ul>
                <li onClick={logout}>🚪</li>
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
