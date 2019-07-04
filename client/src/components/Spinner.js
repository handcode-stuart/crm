import React from "react";
import styled from "styled-components";

const FullPageSpinner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = ({ fullpage }) => {
    return fullpage ? (
        <FullPageSpinner>
            <p>Loading...</p>
        </FullPageSpinner>
    ) : (
        <div>
            <p>Loading...</p>
        </div>
    );
};

export default Spinner;
