import React, { useState } from "react";
import "../AddEmp/AddEmployee.scss";
import EmployeeService from "../Service/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  const saveEmployee = (e) => {
    //disables refreshing of page
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log(res);
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log("Error while saving employee", err);
      });
  };

  return (
    <div className="main-table">
      <div className="first">
        <div className="second">
          <div className="third">
            <h2 className="heading">Add New Emp</h2>
          </div>
          <div className="table">
            <label className="lable">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              className="inputfield"
            ></input>
          </div>
          <div className="table">
            <label className="lable">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              className="inputfield"
            ></input>
          </div>
          <div className="table">
            <label className="lable">Email:</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={(e) => handleChange(e)}
              className="inputfield"
            ></input>
          </div>
          <div className="table">
            <button onClick={saveEmployee} className="btn">
              Save
            </button>
            <button onClick={reset} className="btn-2">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
