import React from "react";
import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./components/Employee"

   
    const Employees = () => {
        const [employees, setEmployees] = useState([
          { empId: 1234, name: "John", designation: "SE" },
          { empId: 4567, name: "Tom", designation: "SSE" },
          { empId: 8910, name: "Kevin", designation: "TA" },
        ]);
        const addEmployee = (emp) => {
          setEmployees([
            ...employees,
          emp,
          ]);
        };
        return <Employee employees={employees}  addEmployee={addEmployee} />;
      };
export default Employees;
