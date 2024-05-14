import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function Home() {
  const [metinler] = useState([
    "Kolayik ile vardiya planı oluşturun",
    "Kolayik ile işe alımdan, personel yönetimine kadar tüm insan kaynakları süreçlerinizi uçtan uca yönetin",
    "Kolayik ile performans değerlendirin, çalışanlarınızın gelişimini takip edin",
  ]);

  const [metinSirasi, setMetinSirasi] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMetinSirasi((metinSirasi + 1) % metinler.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: "150%" }} className="container container-fluid mt-1">
      <div className="column border">
        <Navbar></Navbar>
        <div
          style={{
            background: "#376bfb",
            width: "100%",
            height: 500,
            marginLeft: "0%",
          }}
          className="row border mr-5"
        >
          <div className="text-center mt-5 p-5">
            <h2 style={{ color: "white", fontFamily: "serif" }}>
              Dünyanın işini kolaylaştırıyoruz.
            </h2>
            <br></br>
            <p style={{ color: "white", fontFamily: "Merriweather,serif" }}>
              {metinler[metinSirasi]}
            </p>
            <button
              className="btn"
              style={{
                backgroundColor: "aquamarine",
                borderRadius: 40,
                outline: 0,
                opacity: 1,
                fontFamily: "Gilroy Web, Arial, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: 2,
              }}
            >
              {" "}
              15 Gün Ücretsiz Deneyin
            </button>
            <div>
              <img
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  position: "absolute",
                  top: "40%",
                  left: "10%",
                }}
                src="https://assets-global.website-files.com/6113889e45c6e62ebf4ca212/655626c533f09fe3175e0a2f_Tu%CC%88rkc%CC%A7e%20Dashboard%202.webp"
              ></img>
              <img
                style={{
                  maxWidth: "22%",
                  position: "absolute",
                  top: "55%",
                  left: "70%",
                }}
                src="https://assets-global.website-files.com/6113889e45c6e62ebf4ca212/6538c23ee7fd9be5d184eeb8_kolay-ik-mobile-app%20(1)-p-500.webp"
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "white",
            width: "100%",
            height: 500,
            marginLeft: "0%",
          }}
          className="row border mr-5"
        ></div>
      </div>
    </div>
  );
}

export default Home;
