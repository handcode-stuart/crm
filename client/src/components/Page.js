import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
    padding: 85px 20px 20px 105px;
`;

const Page = ({ children }) => {
    return <StyledPage>{children}</StyledPage>;
};

export default Page;
