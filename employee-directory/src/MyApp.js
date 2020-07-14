import React, { Component } from "react";
import './App.css';
import employees from './employees.json';
import EmployeeRow from './components/Row';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ReactTable from "react-table";
// import "react-table/react-table.css";


class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="content">
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Mobile Phone</th>
                        <th>Office Phone</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>

        {this.state.employees.map(employee => (
          <EmployeeRow
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
