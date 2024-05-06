import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests

function PersonelListesi() {
  const [personnelData, setPersonnelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/hrm/user/find-all-users"); // Specify protocol (http:// or https://)
        setPersonnelData(response.data); // Update state with fetched data
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching personnel data:", error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };

    fetchData();
  }, []);

  return (
    <table style={{ fontFamily: "Merriweather,serif" }} className="table table-sm table-hover">
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
                style={{
                  backgroundColor: "white-smoke",
                  borderRadius: 40,
                  outline: 0,
                  opacity: 1,
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: 2,
                }}
                to={`/edit-employee/${person.id}`}
              >
                Düzenle
              </Link>
            </td>
            <td>
              <button className="btn" style={{ fontSize: 13, letterSpacing: 2 }}>
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
