import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
`;

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
