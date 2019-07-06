import React from "react";
import styled from "styled-components";

const StyledAuthNav = styled.nav`
    position: absolute;
    padding: 0 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colorGreyLight};
    background-color: #fff;
    z-index: 10;
`;

const AuthNav = () => {
    return <StyledAuthNav />;
};

export default AuthNav;
