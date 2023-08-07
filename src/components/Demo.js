
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
function Demo() {
   
  let [data, setdata] = useState(null)
  
   
    fetch("http://localhost:9090/getcourses", {
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
  
  return (
    <div >
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            
          </tr>
        </thead>
        <tbody>
         
          {data && (data.map(item =>
            <tr>
              <th scope="row">{ item.id }</th>
              <td>{ item.title }</td>
              <td>{ item.description }</td>
             
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Demo;
