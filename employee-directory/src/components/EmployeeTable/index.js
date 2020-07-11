import React from "react";

function EmployeeTable(props) {
    return (
            <tr>
                <td>{props.name}</td>
                <td>{props.manager}</td>
                <td>{props.title}</td>
                <td>{props.department}</td>
                <td>{props.mobilePhone}</td>
                <td>{props.officePhone}</td>
                <td>{props.email}</td>
                <td>{props.city}</td>
            </tr>
    )
}

export default EmployeeTable;

// Search input and button 
//<input className="search" type="text" name="search" placeholder="Search table" onChange={this.searchInputChange} />
// <input className="searchButton" type="button" value="Search" onClick={this.searchSubmit} />