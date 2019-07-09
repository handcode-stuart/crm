import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
    padding: 85px 40px 20px calc(160px + 40px);
`;

const Page = ({ children }) => {
    return <StyledPage>{children}</StyledPage>;
};

export default Page;
