

import { useState } from "react";
import OtherPermissionData from "../components/molekul/OtherPermissionData";
import axios from "axios";


export default function PermissionPage() {

  const [firstName, setFirstName] = useState("as");
  const [lastName, setLastName] = useState("as");
  const [id, setId] = useState(-1);

  function HandleSearch() {

    const id = axios.get('http://localhost:8081/findByFullName')
    if (Number(id)) {
      setId(id);
    } 
    else {
      alert("User not found");
    }
  }
  
  
  

  return (
    <div className="container border">
      <div className="container border" style={{ textAlign: "center" }}>
        <h1>Permission Page</h1>
      </div>
      <div className="input-group mt-5">
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" aria-label="Last name" className="form-control" placeholder={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <button type="button" className="btn btn-primary me-2" onClick={HandleSearch}>Search User</button>
      
      {id !== -1 && <OtherPermissionData />}
    </div>
  );
}



