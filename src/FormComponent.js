import React, {useState, useEffect} from 'react'


function FormComponent(){
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [data, setdata]=useState({
      id: id,
      title: title,
      description: description,
  });
    
    function handleSubmit(e){
        e.preventDefault();
    fetch("http://localhost:9090/addcourses ", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id,
          title: title,
          description: description}),
      }).then((data=>
        setdata(data)))
        console.log("Hello at employee insert");
        console.log(id+ " "+title+ " "+ description)
     
  }
  function DeleteHandle(e){
    e.preventDefault();
  useEffect(() => {
    // DELETE request using fetch with set headers
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        }
    };
    fetch('http://localhost:9090/courses/170', requestOptions)
        .then(() => setStatus('Delete successful'));
}, []);
}
    
  return (
    
    <div className="row mb-4">
        <div className="mb-3"></div>
      <form >
        <input
          type="number"
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setdescription(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>Create</button>
        <button type="submit" onClick={DeleteHandle}>Delete</button>
    </form>
    </div>
  );
}
export default FormComponent;