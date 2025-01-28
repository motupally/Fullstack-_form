import { Table, TabContainerbody, Row, Col } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function Demo() {
   
  let [data, setdata] = useState(null)
  let [status, setStatus]=useState([])
   
    fetch("http://localhost:8080/users", {
      "method": "GET",
      "headers": {
        'Authorization': 'Bearer my-token',
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        
      }
    })
        .then(data => data.json())
.then(data => {
  console.log(data);
  setdata(data);
})
.catch(err => {
 
  console.log("Error Reading data " + err);
});  
function DeleteHandle(id){
  
  
  
    
    fetch('http://localhost:8080/delete/${id}', { method: 'DELETE' })
        .then(() => setStatus('Delete successful'));
  
  
 
}
  return (
    <div className='displayTable'>
   
      <Table className="table table-sm">
      <thead>
        
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
         
          {data && (data.map(item =>
            <tr>
              <th scope="row">{ item.id } <button type="submit" onClick={()=>DeleteHandle(item.id)}>Delete</button>
             </th>
              <td>{ item.name }</td>
              <td>{ item.email }</td>
             
            </tr>
            ))}
        </tbody>
      </Table>
      

     
    </div>
  );
}
export default Demo;
