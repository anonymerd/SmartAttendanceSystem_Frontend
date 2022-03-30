import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import './AttendanceLogs.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const data = [
  {
    EmpId: 1,
    Name: 'Rohit Bisht',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 2,
    Name: 'Keshav',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 3,
    Name: 'Akhil',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 4,
    Name: 'Jane Doe',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 1,
    Name: 'Rohit Bisht',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 2,
    Name: 'Keshav',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 3,
    Name: 'Akhil',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 4,
    Name: 'Jane Doe',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
];
// const rows = []

const rows = data.map((log) => {
  return createData(log.EmpId, log.Name, log.CheckIn, log.CheckOut);
});

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>EmpId</StyledTableCell>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align='center'>CheckIn</StyledTableCell>
            <StyledTableCell align='center'>CheckOut</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center'>{row.name}</StyledTableCell>
              <StyledTableCell align='center'>{row.calories}</StyledTableCell>
              <StyledTableCell align='center'>{row.fat}</StyledTableCell>
              <StyledTableCell align='center'>{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
