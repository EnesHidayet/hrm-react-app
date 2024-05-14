import { Link } from "react-router-dom"; // Import Link for routing

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Personel Yönetimi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/personel-yonetim">Tüm Personeller</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/active">Aktif Personeller</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inactive">Pasif Personeller</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-new-employee">Yeni Personel Ekle</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
