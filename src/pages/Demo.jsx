import React, { useState } from "react";
import Card1 from "../components/organizma/Card1";
import Card2 from "../components/organizma/Card2";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0); // Şu anki sayfa indeksi

  const pages = [<Card1 />, <Card2 />]; // Sayfa bileşenlerini bir diziye yerleştirin

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length); // Sayfa indeksini bir artırın, dizi boyutunu aşarsa sıfıra döndürün
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length); // Sayfa indeksini bir azaltın, negatif değere düşerse dizinin sonuna sarın
  };

  return (
    <div className="landingpage">

      <div className="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {pages[currentPage]} {/* Aktif sayfa bileşenini render et */}

      <a style={{backgroundColor: '#f1f1f1', color: 'black', borderRadius: '50%', textDecoration: 'none', display: "inline-block", padding: '8px 16px'}} onClick={handlePrevClick}>&#8249;</a>
      <a style={{backgroundColor: '#f1f1f1', color: 'black', borderRadius: '50%', textDecoration: 'none', display: "inline-block", padding: '8px 16px'}} onClick={handleNextClick}>&#8250;</a>
    </div>
  );
};

export default Carousel;
