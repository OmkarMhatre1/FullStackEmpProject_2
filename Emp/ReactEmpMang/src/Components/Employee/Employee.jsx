import React from "react";
import "../Employee/Employee.scss";
import { useNavigate } from "react-router-dom";

const Employee = ({ emp, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  };

  return (
    <tr key={emp.id}>
      <td className="body2">
        <div className="bodynames">{emp.firstName}</div>
      </td>
      <td className="body2">
        <div className="bodynames">{emp.lastName}</div>
      </td>
      <td className="body2">
        <div className="bodynames">{emp.email}</div>
      </td>
      <td className="body3">
        <a onClick={(e, id) => editEmployee(e, emp.id)} className="edit">
          Edit
        </a>
        <a onClick={(e, id) => deleteEmployee(e, emp.id)} className="delete">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
