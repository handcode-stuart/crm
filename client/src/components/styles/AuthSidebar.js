import styled from "styled-components";

export default styled.nav`
    position: fixed;
    padding: 60px 0 0;
    top: 0;
    left: 0;
    width: 55px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid ${props => props.theme.colorGreyLight};

    @media only screen and (min-width: 740px) {
        width: 160px;
        padding: 85px 0 20px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        &:last-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        li {
            display: block;
            font-size: 14px;

            a {
                margin: 0;
                color: #000;
                text-decoration: none;
                padding: 12px 0;
                display: flex;
                justify-content: center;
                align-items: center;

                @media only screen and (min-width: 740px) {
                    justify-content: flex-start;
                    padding: 12px 30px;
                }

                &:hover,
                &.active {
                    background-color: ${props => props.theme.colorGreyLightest};
                }

                span {
                    width: 16px;
                    height: 16px;
                    border-radius: 8px;
                    display: block;
                    background-color: ${props => props.theme.colorGreyLight};

                    @media only screen and (min-width: 740px) {
                        width: 12px;
                        height: 12px;
                        border-radius: 6px;
                        margin-right: 12px;
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
            }
        }
    }
`;
