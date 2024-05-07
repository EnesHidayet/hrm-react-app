import axios from "axios";
import { useState } from "react";

function OtherPermissionData() {

  const [description, setDescription] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [user, setUser] = useState({});

  function HandlePermit () {
    setUser({
      description: description,
      start: start,
      end: end
    })

    axios.post('http://localhost:8080/addLeave', user).then((response) => {
      console.log(response);
    })
  }

  function HandleDeny () {
    setDescription("")
    setStart("")
    setEnd("")
    setUser({})
  }
  return (
    <>
      <div className="input-group mt-2 mb-2">
        <span className="input-group-text">Description</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <label>Start</label>
      <input id="startDate" className="form-control" type="date" onChange={(e) => setStart(e.target.value)}/>
      <label>End</label>
      <input id="startDate" className="form-control" type="date" onChange={(e) => setEnd(e.target.value)}/>
      <button type="button" className="btn btn-primary me-2" onClick={HandlePermit}>Permit</button>
      <button type="button" className="btn btn-danger me-2" onClick={HandleDeny}>Deny</button>
    </>
  );
}

export default OtherPermissionData;
