// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import DefinePermission from './pages/DefinePermission';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import AcceptPermissions from './pages/AcceptPermissions';
import UserDemo from './pages/UserDemo';
import UserInformationUpdate from './pages/UserInformationUpdate';
import HomeDemo from './demo/HomeDemo';
import LoginDemo from './demo/LoginDemo';
import USERDemo from './demo/USERDemo';

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
        <Route path='/' element={<HomeDemo />} />
        <Route path='/login-demo' element={<LoginDemo setToken={setToken} />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/update-password' element={<UpdatePassword />} />
        <Route
          path="/user-demo"
          element={token ? <UserDemo/> : <Navigate to="/login-demo" replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='/define-permission' element={<DefinePermission />} />
        <Route path='/accept-permissions' element={<AcceptPermissions />} />
        <Route path='/userdemo' element={<USERDemo/>} />
        <Route path='/user-information-update' element={<UserInformationUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
