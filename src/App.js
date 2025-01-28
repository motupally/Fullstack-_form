import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./FormComponent";
//import { ClassComp } from "./CountClass";
//import FormComponent from "./FormComponent";
import Profile from "./Profile";

import Demo from "./components/Demo"
import Header from "./components/Header";
import Product from "./components/Containers";

import NewEmployee from "./NewEmployee";
import Employee from "./components/Employee";
//import FormComponent from "./FormComponent";

//import Example from "./Form";
//import Containers from "./components/Containers";

function App() {
  return (
    <div className="displayTable">
      <Header />
      <Profile/><br/>
     <Demo/>
      
      </div>
  );
    
}

export default App;
