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
  {id: 'stt', label: 'Index', minWidth: 50, align: 'center',},
  { id: 'feed_id', label: 'Feed ID', minWidth: 170 },
  { id: 'value', label: 'Status', minWidth: 100 },
  {
    id: 'created_at',
    label: 'Time',
    minWidth: 190,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }
];


export default function StickyHeadTable() {
  const [rows, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://multidisciplinary-project.onrender.com/api/v1/onoff/activity/1000"
        );
        const data = await response.json();
        console.log(data.data);
        const updatedData = data.data.map((item, index) => ({ ...item, stt: index + 1 }));
        setData(updatedData);
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };
  
    fetchData();
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