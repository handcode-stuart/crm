import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "./styles/Button";

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
