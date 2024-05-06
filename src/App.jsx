// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import PermissionPage from './pages/PermissionPage';
import OtherPermissionData from './components/molekul/OtherPermissionData';

function App() {
  const [token, setToken] = useState(''); // Use state to manage token

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // Load token from storage on mount

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setToken={setToken} />} /> 
        <Route path='/register' element={<Register />} />
        <Route
          path='/user'
          element={token ? <User /> : <Navigate to='/login' replace />}
        />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='/permission-page' element={<PermissionPage />} />
        <Route path='/permission-page' element={<OtherPermissionData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

