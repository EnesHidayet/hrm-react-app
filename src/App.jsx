// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import DefinePermission from './pages/DefinePermission';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import EditEmployee from './pages/EditEmployee';
import AktifPersonelListesi from './components/molekul/AktifPersonelListesi';
import InaktifPersonelListesi from './components/molekul/InaktifPersonelListesi';
import Demo from './pages/HomePageDemo'
import USERDemo from './pages/UserDemo';
import UserInformationUpdate from './pages/UserInformationUpdate';

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
        <Route path='/login' element={<Login setToken={setToken} />} /> 
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/update-password' element={<UpdatePassword />} />
        <Route
          path="/user-demo"
          element={token ? <USERDemo /> : <Navigate to="/login" replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='define-permission' element={<DefinePermission />} />
        <Route path="/edit-employee/:employeeId" element={<EditEmployee />} />
        <Route path='/active' element={<AktifPersonelListesi />} />
        <Route path='/inactive' element={<InaktifPersonelListesi />} />
        <Route path='/' element={< Demo/>} />
        <Route path='/user-information-update' element={< UserInformationUpdate/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
