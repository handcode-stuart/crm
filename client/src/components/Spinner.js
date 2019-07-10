import React from "react";

import FullPageSpinner from "./styles/Spinner";

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
