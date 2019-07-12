import styled from "styled-components";

export default styled.ul`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: calc(100% - 20px);
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
        border: 1px solid ${props => props.theme.colorGreyLight};
        border-radius: 4px;
        padding: 16px;
        margin-top: 12px;

        &.danger {
            border-color: ${props => props.theme.colorRed};
            background-color: ${props => props.theme.colorRed};
            color: ${props => props.theme.colorWhite};
        }

        &.success {
            border-color: ${props => props.theme.colorGreen};
            background-color: ${props => props.theme.colorGreen};
            color: ${props => props.theme.colorWhite};
        }
    }
`;
