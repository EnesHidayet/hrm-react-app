import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PersonelListesi() {
  const [personnelData, setPersonnelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/hrm/user/find-active-users");
        setPersonnelData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching personnel data:", error);        
      }
    };

    fetchData();
  }, []);

  
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
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PersonelListesi;
