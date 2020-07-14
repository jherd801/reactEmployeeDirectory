import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function SimpleTable() {

    // const [employees, setEmployee] = useState(0);

    // state = {
    //     employees: [],
    //   };
    
    //   getEmployees = query => {
    //     API.search(query)
    //       .then(res => this.setState({ employees: res.data }))
    //       console.log(this.state);
    //     //   .catch(err => console.log(err));
    //   };

const employees = [
    {
    "gender": "female",
    "name": {
    "title": "Mrs",
    "first": "Natalie",
    "last": "Hunt"
    },
    "location": {
    "street": {
    "number": 1821,
    "name": "W Pecan St"
    },
    "city": "Carrollton",
    "state": "Nevada",
    "country": "United States",
    "postcode": 52704,
    "coordinates": {
    "latitude": "-19.7880",
    "longitude": "74.2686"
    },
    "timezone": {
    "offset": "-5:00",
    "description": "Eastern Time (US & Canada), Bogota, Lima"
    }
    },
    "email": "natalie.hunt@example.com",
    "login": {
    "uuid": "b7832e28-7921-4d3e-84cc-4069c29a9de8",
    "username": "silverfish152",
    "password": "sarah",
    "salt": "MkeZl4Xp",
    "md5": "3fef3ddc09b498c879c4a5e0d90c933a",
    "sha1": "bb2b776e5d9e042a1bc6d5190ef51d5cae12e721",
    "sha256": "4680c0ba2960d796f3178a087bef599b5189cd099a913f78bae52059f0120e0f"
    },
    "dob": {
    "date": "1968-01-09T11:37:57.775Z",
    "age": 52
    },
    "registered": {
    "date": "2012-09-05T03:01:02.549Z",
    "age": 8
    },
    "phone": "(166)-689-5401",
    "cell": "(647)-564-4726",
    "id": {
    "name": "SSN",
    "value": "209-16-6872"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/77.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
    },
    "nat": "US"
    },
    {
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Rafael",
    "last": "Harvey"
    },
    "location": {
    "street": {
    "number": 7289,
    "name": "Mockingbird Hill"
    },
    "city": "Providence",
    "state": "Idaho",
    "country": "United States",
    "postcode": 37448,
    "coordinates": {
    "latitude": "-16.8296",
    "longitude": "-165.9255"
    },
    "timezone": {
    "offset": "+1:00",
    "description": "Brussels, Copenhagen, Madrid, Paris"
    }
    },
    "email": "rafael.harvey@example.com",
    "login": {
    "uuid": "1b7b9977-b4a4-41e2-bbec-421c67b8b345",
    "username": "angryladybug587",
    "password": "emerald",
    "salt": "vBOGqQCw",
    "md5": "f4c0463d993a8660fbbb1070efc1325b",
    "sha1": "7212f67613e9610f37cb8461c607cdde9d8187f4",
    "sha256": "0337dfb30ff77b5bf0862c4a6d3b447ebc6807c57fbfb08a0f2e7f7f1d894434"
    },
    "dob": {
    "date": "1976-11-23T21:06:11.604Z",
    "age": 44
    },
    "registered": {
    "date": "2011-02-28T12:37:34.993Z",
    "age": 9
    },
    "phone": "(684)-429-3496",
    "cell": "(393)-368-6594",
    "id": {
    "name": "SSN",
    "value": "499-57-8694"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/15.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
    },
    "nat": "US"
    }];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Desk Phone</TableCell>
            <TableCell align="right">Cell Phone</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id.value}>
              <TableCell component="th" scope="employee">
                {employee.id.value}
              </TableCell>
              <TableCell align="right">{employee.name.firstName}</TableCell>
              <TableCell align="right">{employee.name.lastName}</TableCell>
              <TableCell align="right">{employee.location.city}</TableCell>
              <TableCell align="right">{employee.phone}</TableCell>
              <TableCell align="right">{employee.cell}</TableCell>
              <TableCell align="right">{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
