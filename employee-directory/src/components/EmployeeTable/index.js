import React from "react";

function EmployeeTable(props) {
    return (
        <div className="content">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Mobile</th>
                        <th>Office</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;

// Search input and button 
//<input className="search" type="text" name="search" placeholder="Search table" onChange={this.searchInputChange} />
// <input className="searchButton" type="button" value="Search" onClick={this.searchSubmit} />