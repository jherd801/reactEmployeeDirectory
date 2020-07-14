import React, { Component } from "react";
import EmployeeTable from "./components/Row";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {


  render() {
    return (
      <Wrapper>
      <Title>Employee Directory</Title>
        <EmployeeTable />
      </Wrapper>
    );
  }
}

export default App;