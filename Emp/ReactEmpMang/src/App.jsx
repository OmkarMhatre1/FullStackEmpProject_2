import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import AddEmployee from "./Components/AddEmp/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./Components/EmpList/EmployeeList";
import UpdateEmployee from "./Components/UpdateEmp/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route exact path="/" element={<EmployeeList />} />
          <Route exact path="/employeeList" element={<EmployeeList />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/updateEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
