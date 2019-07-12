import styled from "styled-components";

export default styled.div`
    padding: 55px 40px 20px calc(55px + 30px);
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.copyColor};
    min-height: 100vh;

    @media only screen and (min-width: 740px) {
        padding: 85px 40px 40px calc(160px + 40px);
    }
`;
