import React, { useState, Fragment } from "react";

import FormComponent from "./FormComponent";
function Profile() {
  
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    id: "",
    title: "",
    description: ""
  });
  const onValChange = (event) => {
    

    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { id: "", title: "", description: "" };
      setFormObject(isEmpty);
    }
  };
  return (
    <Fragment>
      <FormComponent
        
      />
      
    </Fragment>
  );
}
export default Profile;