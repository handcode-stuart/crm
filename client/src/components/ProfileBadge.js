import React from "react";
import styled from "styled-components";

const StyledProfileBadge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;

    @media only screen and (min-width: 740px) {
        margin-bottom: 24px;
    }

    img {
        width: 30px;
        height: auto;
        border-radius: 20px;

        @media only screen and (min-width: 740px) {
            width: 40px;
            margin-bottom: 12px;
        }
    }

    p {
        margin: 0;
        line-height: 1;
        display: none;

        @media only screen and (min-width: 740px) {
            display: block;
        }
    }
`;

const ProfileBadge = () => {
    return (
        <StyledProfileBadge>
            <div>
                <img src='http://placehold.it/40x40' />
            </div>
            <p>Stuart Morris</p>
        </StyledProfileBadge>
    );
};

export default ProfileBadge;
