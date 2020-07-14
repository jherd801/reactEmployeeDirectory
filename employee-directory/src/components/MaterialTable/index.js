import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../utils/API"


function EmployeeTable() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        API.search()
          .then(res => {
            setEmployees(res.data.results)
        });      
    }, []);


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Desk Phone</TableCell>
            <TableCell align="left">Cell Phone</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id.value}>
              <TableCell component="th" scope="employee">
                {employee.id.value}
              </TableCell>
              <TableCell align="left"><img src={employee.picture.thumbnail} alt="Profile pic"/></TableCell>
              <TableCell align="left">{employee.name.first}</TableCell>
              <TableCell align="left">{employee.name.last}</TableCell>
              <TableCell align="left">{employee.location.city}</TableCell>
              <TableCell align="left">{employee.phone}</TableCell>
              <TableCell align="left">{employee.cell}</TableCell>
              <TableCell align="left">{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable