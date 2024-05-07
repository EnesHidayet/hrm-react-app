import axios from "axios";
import { useEffect, useState  } from "react";

export default function AcceptPermissions() {
  const [user, setUser] = useState([]);
  // const user = [];
  // let user;
  // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));

  useEffect(() => {
    // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));
    // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => user.push(response.data)
    // )
    //  axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => {
    //    user = response.data
    //  })
    axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => {
      setUser(response.data)
    })
  }, []);
  

  function HandleAccept(index) {
    console.log("U" , user);
    axios.post('http://localhost:8081/hrm/user/acceptLeave/' + user[index].id).then((response) => {
      console.log(response);
    })
  }

  function HandleDeny(index) {
    axios.post('http://localhost:8081/hrm/user/denyLeave/' + user[index].id).then((response) => {
      console.log(response);
    })
  }
  


  return (
  
    <div className="container">
      <p className="h2 text-center">Accept Permission Page</p>
      
  

      {/* {getUsers} */}
      <ul className="list-group">
      {user.map((user, index) => (
        <li className="list-group-item border" key={index}>FirstName: {user.firstName}, LastName: {user.lastName}, Description: {user.description},StartDate: {user.startDate}, EndDate: {user.endDate}
        <button type="button" className="btn btn-primary ms-2 me-2" onClick={() =>HandleAccept(index)}>Accept</button>
        <button type="button" className="btn btn-danger" onClick={() => HandleDeny(index)}>Deny</button>
      
        </li>
        
      ))}
      </ul>
      

    </div>
  );
}