import React, { Component } from "react";
import SimpleTable from "./components/MaterialTable"
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.data }))
      console.log(this.state);
    //   .catch(err => console.log(err));
  };

  render() {
    return (
        <SimpleTable />
    );
  }
}

export default App;

