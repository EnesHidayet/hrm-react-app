import axios from "axios";
import { useEffect, useState } from "react";

export default function AcceptPermissions() {
  const [user, setUser] = useState([]);

  // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));

  useEffect(() => {
    const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));
    getUsers();
  }, []);
  


  return (
  
    <div className="container">
      <p className="h2 text-center">Accept Permission Page</p>
      
  

      {/* {getUsers} */}
      <ul className="list-group">
      {user.map((user) => (
        <li className="list-group-item border" key={user.id}>FirstName: {user.firstName}, LastName: {user.lastName}, Description: {user.description},StartDate: {user.startDate}, EndDate: {user.endDate}
        <button type="button" className="btn btn-primary ms-2 me-2">Accept</button>
        <button type="button" className="btn btn-danger">Deny</button>
      
        </li>
        
      ))}
      </ul>
      

    </div>
  );
}