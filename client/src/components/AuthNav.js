import React from "react";
import styled from "styled-components";

const StyledAuthNav = styled.nav`
    position: absolute;
    padding: 0 40px;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colorGreyLight};
    background-color: #fff;
    z-index: 10;

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
            display: inline-block;
            margin-left: 12px;
        }
    }
`;

const AuthNav = () => {
    return (
        <StyledAuthNav>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </StyledAuthNav>
    );
};

export default AuthNav;
