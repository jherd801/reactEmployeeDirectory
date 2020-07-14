// import React, { Component } from "react";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Form from "./components/Form";

// class App extends Component {


//   render() {
//     return (
//       <Wrapper>
//         <Form />
//       </Wrapper>
//     );
//   }
// }

// export default App;

// //======================

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";
import Search from "./pages/Directory"
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/Row";


function App() {
  return (
    <Router>
      <div>
      <Title>Employee Directory</Title>
        <Wrapper>
          <Route exact path="/" component={Search} />
          <EmployeeTable />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;