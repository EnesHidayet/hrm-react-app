import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PersonelListesi() {
  const [personnelData, setPersonnelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/hrm/user/find-all-users");
        setPersonnelData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching personnel data:", error);        
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token"); 
    if (!token) {
      console.error("Missing token for user deletion");
      return;
    }
  
    try {
      const userToDelete = personnelData.find((person) => person.id === id);
      console.log(userToDelete);
      if (!userToDelete) {
        console.error("User not found");
        return;
      }
      
      const requestData = {
        authId: userToDelete.authId,
        token: token
      };
      console.log(requestData);

      const response = await axios.delete(
        `http://localhost:8080/hrm/auth/soft-delete`, 
        requestData
      );
  
      if (response.status === 200) {
        console.log("User status successfully deleted:", response.data);
        setPersonnelData(personnelData.filter((person) => person.id !== id));
      } else {
        console.error("Error deleting user status:", response.data);
      }
    } catch (error) {
      console.error("Error deleting user status:", error);
    }
  };
  
  return (
    <table className="personnel-table">
      <thead className="table-light">
        <tr>
          <th>ID</th>
          <th>Adı Soyadı</th>
          <th>Departman</th>
          <th>Görevi</th>
          <th>Durum</th>
          <th>Düzenle</th>
          <th>Sil</th>
        </tr>
      </thead>
      <tbody>
        {personnelData.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.fullName}</td>
            <td>{person.department}</td>
            <td>{person.title}</td>
            <td>{person.status}</td>
            <td>
              <Link
                className="btn"
                to={`/edit-employee/${person.id}`}
              >
                Düzenle
              </Link>
            </td>
            <td>
              <button
                className="btn"
                onClick={() => handleDelete(person.id)}
              >
                Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PersonelListesi;
