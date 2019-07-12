import React from "react";
import StyledProfileBadge from "./styles/ProfileBadge";

const ProfileBadge = ({ user }) => {
    const { name } = user;
    return (
        <StyledProfileBadge>
            <div>
                <img src='http://placehold.it/40x40' alt={`${name}'s profile picture`} />
            </div>
            <p>{name}</p>
        </StyledProfileBadge>
    );
};

export default ProfileBadge;
