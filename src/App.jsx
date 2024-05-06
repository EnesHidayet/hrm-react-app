import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import AktifPersonelListesi from './components/molekul/AktifPersonelListesi';
import InaktifPersonelListesi from './components/molekul/InaktifPersonelListesi';

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} /> // Pass
        setToken to Login
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/login" replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='/active' element={<AktifPersonelListesi />} />
        <Route path='/inactive' element={<InaktifPersonelListesi />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
