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

  console.log("Hello World");

  function HandlePermit() {
    console.log(description, startDate, endDate, firstName, lastName);
    // setUser({
    //   description: description,
    //   startDate: startDate,
    //   endDate: endDate,
    //   firstName: firstName,
    //   lastName: lastName
    // })

    console.log(
      "User",
      user.description,
      user.startDate,
      user.endDate,
      user.firstName,
      user.lastName
    );

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
      <header style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        <nav>
          <div>
            <ul>
              <li>
                <strong>
                  <h1 className="poetsen-one-regular heading-tag">
                    Define Permission 🏝️
                  </h1>
                </strong>
              </li>
            </ul>
          </div>
          <details
            className="dropdown"
            style={{ marginTop: "20px", marginRight: "100px" }}
          >
            <summary
              className="poetsen-one-regular"
              style={{ color: "#FFBF00", backgroundColor: "#5E5E5E" }}
            >
              Pages
            </summary>
            <ul>
              <li>
                <a href="http://localhost:5173/accept-permissions">
                  AcceptPermissions
                </a>
              </li>
              <li>
                <a href="#">Liquid</a>
              </li>
              <li>
                <a href="#">Gas</a>
              </li>
              <li>
                <a href="#">Plasma</a>
              </li>
            </ul>
          </details>
        </nav>
      </header>
      <div className="grid">
        <div
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          {/* <img
            src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg"
            style={{ width: 687, height: 700 }}
          /> */}
          <figure>
          <img
            style={{ width: 687, height: 700 }}
            src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg"
            alt="Minimal landscape"
          />
          <figcaption>
            Image from
            <a href="https://unsplash.com/photos/a562ZEFKW8I" target="_blank" style={{ color: "#FFBF00", textDecoration: "none" } }>unsplash.com</a>
          </figcaption>
        </figure>
          
          {/* https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg */}
        </div>
        <div>
          <div className="poetsen-one-regular">
            <br />
            <label style={{ color: "#FFBF00" }}>FirstName:</label>
            <input
              style={{ backgroundColor: "#5E5E5E", color: "#9BCCFD" }}
              // #5E5E5E
              type="text"
              name=""
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label style={{ color: "#FFBF00" }}>LastName:</label>
            <input
              style={{ backgroundColor: "#5E5E5E", color: "#9BCCFD" }}
              type="text"
              name=""
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group mt-2 mb-2 poetsen-one-regular">
            <span className="input-group-text" style={{ color: "#FFBF00" }}>
              Description
            </span>
            <textarea
              style={{ backgroundColor: "#5E5E5E", color: "#9BCCFD" }}
              className="form-control"
              aria-label="With textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <label className="poetsen-one-regular" style={{ color: "#FFBF00" }}>
            Start
          </label>
          <input
            style={{ backgroundColor: "#5E5E5E", color: "#9BCCFD" }}
            id="startDate"
            className="form-control"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label className="poetsen-one-regular" style={{ color: "#FFBF00" }}>
            End
          </label>
          <input
            style={{ backgroundColor: "#5E5E5E", color: "#9BCCFD" }}
            id="startDate"
            className="form-control"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button
            style={{ backgroundColor: "#FFBF00", color: "black" }}
            type="button"
            className="btn btn-primary me-2 poetsen-one-regular"
            onClick={HandlePermit}
          >
            Send Permission
          </button>

          {/* <h1
        className="h2 text-center"
        style={{ textAlign: "center", color: "#525F7A" }}
      >
        Define Permission Page
      </h1>
      <hr /> */}
        </div>
      </div>
      <footer
        className="poetsen-one-regular"
        style={{
          color: "#9BCCFD",
          borderTop: "1px solid gray",
          padding: "20px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        All rights reserved©2024
      </footer>
    </>
  );
}

export default DefinePermission;
