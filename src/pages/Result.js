import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const st1 = {
    margin :"35px",
    marginLeft : "75px",
    marginRight : "75px",
    
     
};
const ss={
    width:"100%",
    height:"8px",
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  subject: string,
  greads: number,
) {
  return { subject, greads};
}

const rows = [
  createData('IT314', 10),
  createData('IT457', 10),
  createData('IE410', 10),
  createData('SC403', 10),
  createData('HM327', 10),
  createData('IT413', 10),
  
];

export default function Result() {
  return (
      <div style={st1}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="left">Rameshkumar Kodiyatar</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Semester</StyledTableCell>
            <StyledTableCell align="left">VI</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell align="left">2022</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Branch</StyledTableCell>
            <StyledTableCell align="left">B.Tech ICT</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>CPI</StyledTableCell>
            <StyledTableCell align="left">10</StyledTableCell>
          </TableRow>
          <TableRow>
          <StyledTableCell>SPI</StyledTableCell>
            <StyledTableCell align="left">10</StyledTableCell>
          </TableRow>

          <div style={ss}></div>

          <TableRow>
          <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="left">Greads</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.subject}>
              <StyledTableCell component="th" scope="row">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="left">{row.greads}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
