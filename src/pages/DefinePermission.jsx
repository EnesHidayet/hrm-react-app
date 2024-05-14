// import axios from "axios";
// import { useState } from "react";

// function DefinePermission() {

//   const [description, setDescription] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   console.log("Hello World")

//   const [user, setUser] = useState({});

//   function HandlePermit () {
//     setUser({
//       description: description,
//       start: start,
//       end: end
//     })

//     axios.post('http://localhost:8081/addLeave', user).then((response) => {
//       console.log(response);
//     })
//   }

//   function HandleDeny () {
//     setDescription("")
//     setStart("")
//     setEnd("")
//     setUser({})
//   }
//   return (
//     <>
//       <h1 className="text-center">Define Permission</h1>
//       <div className="input-group mt-2 mb-2">
//         <span className="input-group-text">Description</span>
//         <textarea
//           className="form-control"
//           aria-label="With textarea"
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>
//       <label>Start</label>
//       <input id="startDate" className="form-control" type="date" onChange={(e) => setStart(e.target.value)}/>
//       <label>End</label>
//       <input id="startDate" className="form-control" type="date" onChange={(e) => setEnd(e.target.value)}/>
//       <button type="button" className="btn btn-primary me-2" onClick={HandlePermit}>Send Permission</button>
//       <button type="button" className="btn btn-danger me-2" onClick={HandleDeny}>Deny Permission</button>
//     </>
//   );
// }

// export default DefinePermission;

import axios from "axios";
import { useState } from "react";

function DefinePermission() {
  
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const user = {
    description: description,
    startDate: startDate,
    endDate: endDate,
    firstName: firstName,
    lastName: lastName,
  };

  console.log("Hello World")

  function HandlePermit() {
    console.log(description, startDate, endDate, firstName, lastName);
    // setUser({
    //   description: description,
    //   startDate: startDate,
    //   endDate: endDate,
    //   firstName: firstName,
    //   lastName: lastName
    // })

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
            value={firstName}
            
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="">LastName:</label>
          <input
            type="text"
            name=""
            className="form-control"
            value={lastName}
            
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      <div className="input-group mt-2 mb-2">
        
        <span className="input-group-text">Description</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <label>Start</label>
      <input
        id="startDate"
        className="form-control"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End</label>
      <input
        id="startDate"
        className="form-control"
        type="date"
        value={endDate}
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
