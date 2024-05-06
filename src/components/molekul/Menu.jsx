import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Menu (){

  return (
    <div style={{backgroundColor: 'white-smoke', 
    borderRadius: 40, outline:0, opacity:1, 
    fontWeight:500, fontSize: 13, letterSpacing: 2, }} className="sidebar">
      <ul>
        <br></br>
        <li>
          <Link to="/">Tüm Personeller</Link>
        </li>
        <li>
          <Link to="/departments">Departmanlara Göre</Link>
        </li>
        <li>
          <Link to="/active">Aktif Personeller</Link>
        </li>
        <li>
          <Link to="/inactive">Pasif Personeller</Link>
        </li>
        <li>
          <Link to="/add-new-employee">Yeni Personel Ekle</Link>
        </li>
        <li>
          <Link to="/departments">Departmanlar</Link>
        </li>
      </ul>

    </div>
  );

};

export default Menu;
