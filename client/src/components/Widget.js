import React from "react";
import styled from "styled-components";

const StyledWidget = styled.div`
    border: 1px solid ${props => props.theme.colorGreyLight};
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-color: ${props => props.theme.colorGreyLightest};
    margin-bottom: 20px;

    @media (min-width: 740px) {
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }

    @media (min-width: 980px) {
        width: calc(33.33% - 20px);
        margin-bottom: 30px;
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1440px) {
    }
`;

const Widget = ({ children }) => {
    return <StyledWidget>{children}</StyledWidget>;
};

export default Widget;
