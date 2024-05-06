import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AddEmployee() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [militaryService, setMilitaryService] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  // ... other state variables for equipmentList, shiftList, leaveList, breakList (if needed)

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const newEmployee = {
      fullName,
      email,
      phoneNumber,
      address,
      identityNumber,
      birthDate,
      militaryService,
      drivingLicense,
      department,
      title,
      // ... other data for equipmentList, shiftList, leaveList, breakList (if needed)
    };

    try {
      const response = await axios.post("http://localhost:8081/hrm/user/register", newEmployee);
      console.log("Employee creation response:", response.data);
      alert('Kullanıcı kaydedildi!');
      // Handle successful creation (e.g., display success message, redirect to another page)
    } catch (error) {
      console.error("Error creating employee:", error);
      // Handle errors appropriately (e.g., display error message to user)
    }

  };

  const navigate = useNavigate();
  const handleDone = () => {
    navigate("/"); // Redirect to home page
    };

    const handleAddAnother = () => {
        setFullName(""); // Reset form fields
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setIdentityNumber("");
        setBirthDate("");
        setMilitaryService("");
        setDrivingLicense("");
        setDepartment("");
        setTitle("");
    };

  return (
    <div className="container border p-5 mt-5">
      <h1 className="text-center mb-3">Yeni Personel Ekle</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="fullName">Adı Soyadı</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phoneNumber">Telefon Numarası</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="address">Adres</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="identityNumber">TC Kimlik No</label>
          <input
            type="text"
            className="form-control"
            id="identityNumber"
            value={identityNumber}
            onChange={(e) => setIdentityNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="birthDate">Doğum Tarihi</label>
          <input
            type="date"
            className="form-control"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="militaryService">Askerlik Durumu</label>
          <select
            className="form-control"
            id="militaryService"
            value={militaryService}
            onChange={(e) => setMilitaryService(e.target.value)}
            required
          >
            <option value="">Askerlik Durumu Seçiniz</option>
            <option value="Yapıldı">Yapıldı</option>
            <option value="Yapılmadı">Yapılmadı</option>
            <option value="Tecil">Tecil Edildi</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="drivingLicense">Ehliyet</label>
          <select
            className="form-control"
            id="drivingLicense"
            value={drivingLicense}
            onChange={(e) => setDrivingLicense(e.target.value)}
            required
          >
            <option value="">Ehliyet Seçiniz</option>
            <option value="A">A Sınıfı</option>
            <option value="B">B Sınıfı</option>
            <option value="C">C Sınıfı</option>
            <option value="D">D Sınıfı</option>
            <option value="E">E Sınıfı</option>
            <option value="F">F Sınıfı</option>
            <option value="M">M Sınıfı</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="department">Departman</label>
          <select
            className="form-control"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Departman Seçiniz</option>
            <option value="Muhasebe">Muhasebe</option>
            <option value="Satış">Satış</option>
            <option value="Pazarlama">Pazarlama</option>
            <option value="İnsan Kaynakları">İnsan Kaynakları</option>
            <option value="Üretim">Üretim</option>
            <option value="Ar-Ge">Ar-Ge</option>
            <option value="Bilgi Teknolojileri">Bilgi Teknolojileri</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="title">Görev</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Kaydet</button>
        <button type="button" className="btn btn-secondary ml-2 mt-3" onClick={handleDone}>
          Ana Sayfa
        </button>
        <button type="button" className="btn btn-secondary ml-2 mt-3" onClick={handleAddAnother}>
          Başka Ekle
        </button>
      </form>
    </div>
  );

  }
  
  export default AddEmployee;
  
