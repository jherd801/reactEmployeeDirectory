import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Form from "../components/Form";
import EmployeeTable from "../components/Row";

class Search extends Component {
    state = {
        results: [],
        firstName: "",
        lastName: "",
    }


    componentDidMount() {
        API.search()
        .then(res => this.setState(
            [{ 
                results: res.data, 
            }]))
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        this.setState({ results: event.target.value })
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.setState
    // }

    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h1 className="text-center">Search for an Employee</h1>
              {/* <Alert
                type="danger"
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.state.error}
              </Alert> */}
              <Form
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                breeds={this.state.breeds}
              />
              <EmployeeTable results={this.state.results} />
            </Container>
          </div>
        );
      }
}

export default Search