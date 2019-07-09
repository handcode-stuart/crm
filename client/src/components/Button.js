import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #34335c;
    border-radius: 4px;
    padding: 8px 12px;
    display: inline-block;
    color: #fff;
`;

const Button = ({ to, children }) => {
    return to ? (
        <Link to={to}>
            <StyledButton>{children}</StyledButton>
        </Link>
    ) : (
        <StyledButton>{children}</StyledButton>
    );
};

export default Button;
