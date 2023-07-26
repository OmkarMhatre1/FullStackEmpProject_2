import React, { useEffect, useState } from "react";
import "../UpdateEmp/UpdateEmployee.scss";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  return (
    <div className="main-table">
      <div className="first">
        <div className="second">
          <div className="third">
            <h2 className="heading">Update Employee</h2>
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
            <button onClick={updateEmployee} className="btn">
              Update
            </button>
            <button onClick={() => navigate("/employeeList")} className="btn-2">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
