import axios from "axios";
import { useState } from "react";

function DefinePermission() {
  const [user, setUser] = useState({
    description: "",
    startDate: "",
    endDate: "",
    firstName: "",
    lastName: "",
  });
  const [description, setDescription] = useState(user.description);
  const [startDate, setStartDate] = useState(user.startDate);
  const [endDate, setEndDate] = useState(user.endDate);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  

  function HandlePermit() {
    console.log(description, startDate, endDate, firstName, lastName);
    setUser({
      description: description,
      startDate: startDate,
      endDate: endDate,
      firstName: firstName,
      lastName: lastName
    })

    console.log("User" , user.description, user.startDate, user.endDate, user.firstName, user.lastName);

    const responsee = (user) =>
      axios.post("http://localhost:8081/hrm/user/addLeave", user);

    responsee(user)
      .then((response) => {
        console.log(response.data);
        
        // navigator("/departments");
      })
      .catch((error) => {
        console.error(error);
        //If there are any errors while calling the rest API, we can catch and print that error in a console.
      });
  }

  
  return (
    <>
      <p className="h2 text-center">Define Permission Page</p>
      <div>
          <label htmlFor="">FirstName:</label>
          <input
            type="text"
            name=""
            className="form-control"
            
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="">LastName:</label>
          <input
            type="text"
            name=""
            className="form-control"
            
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      <div className="input-group mt-2 mb-2">
        
        <span className="input-group-text">Description</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <label>Start</label>
      <input
        id="startDate"
        className="form-control"
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End</label>
      <input
        id="startDate"
        className="form-control"
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={HandlePermit}
      >
        Send Permission
      </button>
      
    </>
  );
}

export default DefinePermission;
