import React from "react";
import "./style.css";


function Form(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Search for employees by state:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Type in a state to begin"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
