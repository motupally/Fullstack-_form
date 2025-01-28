import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

import './components/Demo.css'
function FormComponent(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[status, setStatus]=useState({id:id})
    const [data, setdata]=useState({
      id: id,
      name: name,
      email: email,
  });
    
    function handleSubmit(e){
        e.preventDefault();
    fetch("http://localhost:8080/addUser ", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id,
          name: name,
          email: email}),
      }).then((data=>
        setdata(data)))
        console.log("Hello at employee insert");
        console.log(id+ " "+name+ " "+ email)
     
  }
  
  return (
    
    <div  className="formDisplay">
    <Row>
    <Col>
    <Form className='inputText'>
    <Form.Group> 
          <Form.Label>Enter your Id:</Form.Label> 
          <Form.Control type="text"  value={id}
                        placeholder="Enter your Id"onChange={(e) => setId(e.target.value)} /> 
        </Form.Group>  
      <Form.Group> 
          <Form.Label>Enter your name:</Form.Label> 
          <Form.Control type="text"  value={name}
                        placeholder="Enter your full name"onChange={(e) => setName(e.target.value)} /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" value={email}
                        placeholder="Enter your your email address"  onChange={(e) => setEmail(e.target.value)} /> 
        </Form.Group> 
        <br/>
        
        <Button variant="primary" type="submit" onClick={handleSubmit}> 
           Create  
        </Button> {'  '}
       
        <Button variant="primary" type="submit" onClick={()=>DeleteHandle(id)}> 
           Delete  
        </Button> 
     
       
        
      </Form> 
      </Col>
      
      </Row>
      

    </div>
  );
}
export default FormComponent;