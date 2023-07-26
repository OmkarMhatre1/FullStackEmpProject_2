import React, { useEffect, useState } from "react";
import "../EmpList/EmployeeList.scss";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";
import Employee from "../Employee/Employee";

function EmployeeList() {
  const navigate = useNavigate();

  const [loding, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employee) {
        setEmployee((prevElemnet) => {
          return prevElemnet.filter((emp) => emp.id !== id);
        });
      }
    });
  };

  return (
    <>
      <div className="main">
        <button onClick={() => navigate("/addEmployee")} className="btn">
          Add Employee
        </button>
      </div>
      <div className="second-div-table">
        <table className="tbl">
          <thead className="thd">
            <tr>
              <th className="names">First Name</th>
              <th className="names">Last Name</th>
              <th className="names">Email ID</th>
              <th className="action">Actions</th>
            </tr>
          </thead>
          {!loding && (
            <tbody className="body">
              {employee.map((emp) => (
                <Employee
                  emp={emp}
                  deleteEmployee={deleteEmployee}
                  key={emp.id}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default EmployeeList;
