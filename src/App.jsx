// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import Home from './pages/Home';
import User from './pages/User';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import DefinePermission from './pages/DefinePermission';
import AcceptPermissions from './pages/AcceptPermissions';
import HomeUpdated from './pages/HomeUpdated';
import Equipment from './pages/Equipment';
import TypedDeneme from './pages/TypedDeneme';

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
        {/*  <Route path='/' element={<Home />} />*/}
        <Route path='/' element={<HomeUpdated />} />
        <Route path='/login' element={<Login setToken={setToken} />} /> 
        <Route path='/register' element={<Register />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/login" replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='/define-permission' element={<DefinePermission />} />
        <Route path='/accept-permissions' element={<AcceptPermissions />} />
        <Route path= '/user/equipment' element={<Equipment />} />
        <Route path='/typed' element={<TypedDeneme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
