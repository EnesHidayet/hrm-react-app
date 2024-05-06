// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
<<<<<<< HEAD
import PermissionPage from './pages/PermissionPage';
import OtherPermissionData from './components/molekul/OtherPermissionData';
=======
import AktifPersonelListesi from './components/molekul/AktifPersonelListesi';
import InaktifPersonelListesi from './components/molekul/InaktifPersonelListesi';
>>>>>>> origin/master

function App() {
  const [token, setToken] = useState(""); // Use state to manage token

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // Load token from storage on mount

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setToken={setToken} />} /> 
        <Route path='/register' element={<Register />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} /> // Pass
        setToken to Login
        <Route path="/register" element={<Register />} />
>>>>>>> origin/master
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/login" replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
<<<<<<< HEAD
        <Route path='/permission-page' element={<PermissionPage />} />
        <Route path='/permission-page' element={<OtherPermissionData />} />
=======
        <Route path='/active' element={<AktifPersonelListesi />} />
        <Route path='/inactive' element={<InaktifPersonelListesi />} />


>>>>>>> origin/master
      </Routes>
    </BrowserRouter>
  );
}

export default App;
