import React from "react";
import styled from "styled-components";

const StyledWidgetRow = styled.div`
    @media only screen and (min-width: 740px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`;

const WidgetRow = ({ children }) => {
    return <StyledWidgetRow>{children}</StyledWidgetRow>;
};

export default WidgetRow;
