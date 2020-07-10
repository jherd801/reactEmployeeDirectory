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
        {this.state.employees.map(employee => (
          // <EmployeeCard
          <EmployeeTable
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
      </Wrapper>
    )
  }

}

export default App;
