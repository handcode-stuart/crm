import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    margin: 24px 0;
    table-layout: fixed;
`;

export const StyledTableHead = styled.thead`
    background-color: ${props => props.theme.colorGreyLightest};
`;

export const StyledTableHeadCell = styled.th`
    padding: 8px 4px;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${props => props.theme.colorGreyLightest};
    }
    &:hover {
        background-color: ${props => props.theme.colorGreyLight};
        cursor: pointer;
    }
`;

export const StyledTableCell = styled.td`
    padding: 8px 4px;
`;
