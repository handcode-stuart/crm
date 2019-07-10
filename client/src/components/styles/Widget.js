import styled from "styled-components";

export default styled.div`
    border: 1px solid ${props => props.theme.colorGreyLight};
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-color: ${props => props.theme.colorGreyLightest};
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    > div:first-child {
        height: 30px;
        border-bottom: 1px solid ${props => props.theme.colorGreyLight};
        line-height: 30px;
        padding: 0 8px;
    }

    > div:last-child {
        height: calc(100% - 30px);
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }

    @media (min-width: 740px) {
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }

    @media (min-width: 980px) {
        width: calc(33.33% - 20px);
        margin-bottom: 30px;
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1440px) {
    }
`;
