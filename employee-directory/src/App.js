import React, { Component } from "react";
import './App.css';
import employees from './employees.json';
import EmployeeCard from './components/EmployeeCard'

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
          name={employee.name}
          manager={employee.manager}
          />
        ))}
      </Wrapper>
    )
  }

}

export default App;
