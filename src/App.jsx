import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import EditEmployee from './pages/EditEmployee';
import AktifPersonelListesi from './components/molekul/AktifPersonelListesi';
import InaktifPersonelListesi from './components/molekul/InaktifPersonelListesi';
import Demo from './pages/HomePageDemo';
import USERDemo from './pages/UserDemo';
import UserInformationUpdate from './pages/UserInformationUpdate';
import AddComment from './pages/AddComment';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import { useEffect, useState } from 'react';
import PersonelYonetim from './pages/PersonelYonetim';
import AddNewEmployee from './pages/AddNewEmployee';
import DefinePermission from './pages/DefinePermission';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import EditEmployee from './pages/EditEmployee';
import AktifPersonelListesi from './components/molekul/AktifPersonelListesi';
import InaktifPersonelListesi from './components/molekul/InaktifPersonelListesi';
import Demo from './pages/HomePageDemo';
import USERDemo from './pages/UserDemo';
import UserInformationUpdate from './pages/UserInformationUpdate';
import AddComment from './pages/AddComment';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(""); // Use state to manage token

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken !== null) {
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
          element={<ProtectedRoute element={USERDemo} />}
        />
        <Route path='/personel-yonetim' element={<ProtectedRoute element={PersonelYonetim} />} />
        <Route path='/add-new-employee' element={<ProtectedRoute element={AddNewEmployee} />} />
        <Route path='/define-permission' element={<ProtectedRoute element={DefinePermission} />} />
        <Route path="/edit-employee/:employeeId" element={<ProtectedRoute element={EditEmployee} />} />
        <Route path='/active' element={<ProtectedRoute element={AktifPersonelListesi} />} />
        <Route path='/inactive' element={<ProtectedRoute element={InaktifPersonelListesi} />} />
        <Route path='/' element={<Demo />} />
        <Route path='/user-information-update' element={<ProtectedRoute element={UserInformationUpdate} />} />
        <Route path='/add-comment' element={<ProtectedRoute element={AddComment} />} />
        <Route path='/personel-yonetim' element={<PersonelYonetim />} />
        <Route path='/add-new-employee' element={<AddNewEmployee />} />
        <Route path='define-permission' element={<DefinePermission />} />
        <Route path="/accept-permissions" element={<AcceptPermissions />} />
        <Route path="/company" element={<Company />} />
        <Route path="/edit-employee/:employeeId" element={<EditEmployee />} />
        <Route path='/active' element={<AktifPersonelListesi />} />
        <Route path='/inactive' element={<InaktifPersonelListesi />} />
        <Route path='/user-information-update' element={< UserInformationUpdate/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
