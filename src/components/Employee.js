import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Employee({employees, addEmployee}){
    let person = { empId: 4321, name: "Smith", designation: "TL" };  
    const add = () => {
      addEmployee(person);
    }
    return(
        <>
        <div className="container mt-5">
        <h2>Featured Cards</h2>
        <div className="row">
          {employees.map(emp => {
            return (
              <div className="col-md-4" key={emp.empId}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{emp.name}</h5>
                    <p className="card-text">
                      {emp.name}'s designation is {emp.designation} and has employee Id {emp.empId}
                    </p>
                  </div>
                </div><br/>
              </div>
            )
          })}          
        </div><br/>
        <button className="btn btn-primary" onClick={add}>Add Employee</button>
      </div>
    
                <table style={{ width: '60%' }} className='table'>
                
                        <thead>
                                <tr>
                                       <th>EmpID</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                                {employees.map(employee => {
                   return (<tr key={employee.empId}>
                       <td>{employee.empId}</td>
                       <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                                                </tr>)
                                            })
                                }
                        </tbody>
                </table><br/><br/>
                <button className="btn btn-primary" onClick={add}>Add an Employee</button>
        
      </>
    )
}
export default Employee;
