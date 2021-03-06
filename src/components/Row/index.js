import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import Form from "../Form";


function EmployeeTable() {

  let [employees, setEmployees] = useState([]);

  useEffect(() => {
      API.search()
        .then(res => {
          setEmployees(res.data.results)
      });      
  }, []);

  let searchFunction = (e) => {
    const filterResult = employees.filter(employee => employee.location.state.includes(e.target.value));
    setEmployees(filterResult)
  }

    return (
      <Wrapper>
        <Form handleInputChange = {searchFunction}/>
        <div className="content">
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                      <th>Photo</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Office Phone</th>
                      <th>Mobile Phone</th>
                      <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id.value}>
                      <td><img src={employee.picture.large} alt="Profile pic"/></td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.location.city}</td>
                      <td>{employee.location.state}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.cell}</td>
                      <td>{employee.email}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
      </Wrapper>
                  )}

export default EmployeeTable;

