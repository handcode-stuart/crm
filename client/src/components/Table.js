import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    margin: 24px 0;
    table-layout: fixed;
`;

const Table = ({ children }) => {
    return <StyledTable>{children}</StyledTable>;
};

const StyledTableHead = styled.thead`
    background-color: ${props => props.theme.colorGreyLightest};
`;

export const TableHead = ({ children }) => {
    return <StyledTableHead>{children}</StyledTableHead>;
};

const StyledTableHeadCell = styled.th`
    padding: 8px 4px;
`;

export const TableHeadCell = ({ children }) => {
    return <StyledTableHeadCell>{children}</StyledTableHeadCell>;
};

const StyledTableBody = styled.tbody``;

export const TableBody = ({ children }) => {
    return <StyledTableBody>{children}</StyledTableBody>;
};

const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${props => props.theme.colorGreyLightest};
    }
    &:hover {
        background-color: ${props => props.theme.colorGreyLight};
        cursor: pointer;
    }
`;

export const TableRow = ({ children }) => {
    return <StyledTableRow>{children}</StyledTableRow>;
};

const StyledTableCell = styled.td`
    padding: 8px 4px;
`;

export const TableCell = ({ children }) => {
    return <StyledTableCell>{children}</StyledTableCell>;
};

export default Table;
