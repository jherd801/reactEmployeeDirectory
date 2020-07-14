// import React, { Component } from "react";
// import './App.css';
// import ReactTable from "react-table";


// class App extends Component {

//   constructor(props) {
//     super(props);
    
//     this.state = {
//       posts: []
//     }
//   }
  
//   componentDidMount() {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url, {
//       method: "GET"
//     }).then(res => res.json()).then(posts => {
//       this.setState({ posts: posts })
//       console.log("posts", posts)
//     })
//   }
  
//   render() {
//     const columns = [
//       {
//         Header: "User ID",
//         accessor: "userId"
//       },
//       {
//         Header: "ID",
//         accessor: "userId"
//       },
//       {
//         Header: "Title",
//         accessor: "title"
//       },
//       {
//         Header: "Content",
//         accessor: "body"
//       }
//     ]
//     return (
//       <ReactTable
//         columns={columns}
//         data={this.state.posts}
//       />
//     )
//   }

// }

// export default App;

//_______________________________________________________

import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'


// class App extends Component {

render() {
  const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },{
    ...
  }]
 
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
 
  return <ReactTable
    data={data}
    columns={columns}
  />
}

export default App;
