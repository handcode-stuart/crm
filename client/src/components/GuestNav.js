import React from "react";
import { Link } from "react-router-dom";

const GuestNav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Log in</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default GuestNav;
