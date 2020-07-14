import React from "react";
import "./style.css"

function EmployeeRow(props) {
    return (
            <tr>
                <td className="col-shade">{props.name}</td>
                <td>{props.manager}</td>
                <td className="col-shade">{props.title}</td>
                <td>{props.department}</td>
                <td className="col-shade">{props.mobilePhone}</td>
                <td>{props.officePhone}</td>
                <td className="col-shade">{props.email}</td>
                <td>{props.city}</td>
            </tr>
    )
}

export default EmployeeRow;
