import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';





const columns = [
  { id: 'stt', label: 'Index', minWidth: 50, align: 'center' },
  { id: 'feed_id', label: 'Feed ID', minWidth: 170 },
  { id: 'value', label: 'Status', minWidth: 100 },
  {
    id: 'created_at',
    label: 'Time',
    minWidth: 190,
    align: 'center',
    format: value => value.toLocaleString('en-US'),
  }
];


// const fetchData = async () => {  

export default function StickyHeadTable() {
  const [rows, setData] = useState([]);

  function convertGMT(dateString) {
    const date = new Date(dateString + 'Z'); // Ensure the input is treated as UTC
    date.setHours(date.getHours() + 7); // Add 7 hours
    // Format the date to a more readable form, local time assumed
    const updatedDateString = date.toISOString().replace('T', ' ').substring(0, 19);
    return updatedDateString;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://multidisciplinary-project.onrender.com/api/v1/onoff/activity/1000"
        );
        const data = await response.json();
        const updatedData = data.data.map((item, index) => ({
          ...item,
          stt: index + 1,
          created_at: convertGMT(item.created_at) // Correctly access and convert created_at here
        }));
        console.log(updatedData); // This now holds the modified data
        setData(updatedData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                sx={{
                                    minWidth: column.minWidth,
                                    fontSize: '1.15rem', // Adjust font size as needed
                                }}
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth, backgroundColor: '#ffe6c7',}}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                  
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}
                                            sx={{
                                                minWidth: column.minWidth,
                                                fontSize: '1.15rem', // Adjust font size as needed
                                            }}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
);
}