import React, { Component } from "react";
import Container from "../components/Container";
import EmployeeTable from "../components/Row";

class Search extends Component {
    state = {
        lastName: "",
        results: [],
        search: []
    }

    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h3 className="text-center">Search for an Employee</h3>
              <EmployeeTable/>
            </Container>
          </div>
        );
      }
}

export default Search