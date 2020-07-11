import React, { Component } from "react";
import './App.css';
import employees from './employees.json';
// import EmployeeCard from './components/EmployeeCard';
import EmployeeTable from './components/EmployeeTable';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="content">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Mobile</th>
                        <th>Office</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>

        {this.state.employees.map(employee => (
          <EmployeeTable
          key={employee.id}
          name={employee.name}
          manager={employee.managerName}
          title={employee.title}
          department={employee.department}
          mobilePhone={employee.mobilePhone}
          officePhone={employee.officePhone}
          email={employee.email}
          city={employee.city}
          />
          ))}
          </tbody>
      </table>
  </div>
      </Wrapper>
    )
  }

}

export default App;
