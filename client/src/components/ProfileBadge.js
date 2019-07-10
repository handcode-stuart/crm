import React from "react";
import { connect } from "react-redux";

import StyledProfileBadge from "./styles/ProfileBadge";

const ProfileBadge = ({ auth }) => {
    const { user } = auth;
    return (
        <StyledProfileBadge>
            <div>
                <img src='http://placehold.it/40x40' />
            </div>
            {user && <p>{user.name}</p>}
        </StyledProfileBadge>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(ProfileBadge);
