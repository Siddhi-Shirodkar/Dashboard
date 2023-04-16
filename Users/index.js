import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {RaisedButton, Avatar, Typography } from '@mui/material';
import Title from '../Title'
import { List, Padding } from '@mui/icons-material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

// Generate Order Data
function createData(id, orderid, date, name, shipTo, paymentMethod, status) {
  return { id, orderid, date, name, shipTo, paymentMethod, status };
}

const rows = [
  createData(
    0,
    '#0001',
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'Vasco, Goa',
    'Approved',
  ),
  createData(
    1,
    '#00042',
    '16 Mar, 2019',
    'Paul McCartney',
    'House1',
    'Old Goa, Panaji, Goa',
    'Rejected',
  ),
  createData(2, '#00019', '16 Mar, 2019', 'Tom Scholz', 'Bunglow 2', 'Chicalim, Goa', 'pending'),
  createData(
    3,
    '#00023',
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'HeadLand, Sada, Goa',
    'Pending',
  ),
  createData(
    4,
    '#00021',
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'Mangor Hill, Vasco Da-gama, Goa',
    'Approved',
  ),
  createData(2, '#00019', '16 Mar, 2019', 'Tom Scholz', 'Bunglow 2', 'Chicalim, Goa', 'pending'),
  createData(2, '#00019', '16 Mar, 2019', 'Tom Scholz', 'Bunglow 2', 'Chicalim, Goa', 'pending'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <div>
      <Title>Documents Verification</Title>
      <Table sx={{ width:'100%', marginTop: '2.5rem' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Users</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>User ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Property</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }}>Location</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform:'uppercase' }} align="right">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Avatar sx={{marginTop:"0.5rem", marginLeft:"1rem"}} src="/broken-image.jpg" />
              <TableCell>{row.orderid}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right" >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </div>
  );  
}