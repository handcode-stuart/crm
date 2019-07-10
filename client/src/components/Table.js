import React from "react";

import {
    StyledTable,
    StyledTableHead,
    StyledTableHeadCell,
    StyledTableBody,
    StyledTableRow,
    StyledTableCell,
} from "./styles/Table";

const Table = ({ children }) => {
    return <StyledTable>{children}</StyledTable>;
};

export const TableHead = ({ children }) => {
    return <StyledTableHead>{children}</StyledTableHead>;
};

export const TableHeadCell = ({ children }) => {
    return <StyledTableHeadCell>{children}</StyledTableHeadCell>;
};

export const TableBody = ({ children }) => {
    return <StyledTableBody>{children}</StyledTableBody>;
};

export const TableRow = ({ children }) => {
    return <StyledTableRow>{children}</StyledTableRow>;
};

export const TableCell = ({ children }) => {
    return <StyledTableCell>{children}</StyledTableCell>;
};

export default Table;
