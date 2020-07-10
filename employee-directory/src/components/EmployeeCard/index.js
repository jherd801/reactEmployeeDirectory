import React from "react";

function EmployeeCard(props) {
    return (
        <div className="content">
            <ul>
                <li>
                    <strong>Name: </strong> {props.name}
                </li>
                <li>
                    <strong>Manager: </strong> {props.manager}
                </li>
                <li>
                    <strong>Title: </strong> {props.title}
                </li>
                <li>
                    <strong>Department: </strong> {props.department}
                </li>
                <li>
                    <strong>Mobile: </strong> {props.mobilePhone}
                </li>
                <li>
                    <strong>Office: </strong> {props.officePhone}
                </li>
                <li>
                    <strong>Email: </strong> {props.email}
                </li>
                <li>
                    <strong>City: </strong> {props.city}
                </li>
            </ul>
        </div>
    )
}

export default EmployeeCard;