import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

function EditEmployee() {
  const { employeeId } = useParams();
  const [allUsers, setAllUsers] = useState([]); // Tüm kullanıcıları depolamak için state
  const [employeeData, setEmployeeData] = useState({}); // Belirli bir kullanıcı verisi için state

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8081/hrm/user/find-all-users");
        setAllUsers(response.data);
      } catch (error) {
        console.error("Tüm kullanıcıları getirirken hata oluştu:", error);
      }
    };

    fetchAllUsers();
  }, []); // Component monte edildiğinde sadece tüm kullanıcıları getir

  useEffect(() => {
    const fetchData = async () => {
      if (employeeId && allUsers.length > 0) {
        try {
          const user = allUsers.find((user) => user.id === employeeId);
          if (user) {
            console.log(user);
            setEmployeeData(user);
          } else {
            console.error("ID'si", employeeId, "olan kullanıcı verisi bulunamadı");
          }
        } catch (error) {
          console.error("ID'ye göre kullanıcı bulunurken hata oluştu:", error);
        }
      }
    };

    fetchData(); // employeeId değiştiğinde veya allUsers güncellendiğinde belirli kullanıcı verisini getir
  }, [employeeId, allUsers]); // Bağımlılık dizisi employeeId ve allUsers içerir

  const handleFormSubmit = async (event) => {

    event.preventDefault(); // Varsayılan form gönderimini engelle

    const updatedEmployeeData = {
      ...employeeData, // Diğer alanları korumak için mevcut veriyi yay
      userId: employeeId, // userId'yi otomatik olarak employeeId'den doldur
      title: event.target.title.value, // Form girişinden başlığı güncelle
      department: event.target.department.value, // Form girişinden departmanı güncelle
      militaryService: event.target.militaryService.value, // Form girişinden askerlik durumunu güncelle
      drivingLicense: event.target.drivingLicense.value, // Form girişinden ehliyet durumunu güncelle
      status: event.target.status.options[event.target.status.selectedIndex].value, // status alanını form girdisinden al
    };

    try {
      const response = await axios.post(`http://localhost:8081/hrm/user/updateUser`, updatedEmployeeData);
      console.log("Kullanıcı başarıyla güncellendi:", response.data);
      alert("Personel bilgileri güncellendi!");

    } catch (error) {
      console.error("Kullanıcı güncelleme hatası:", error);
    }

  };

  return (
    <div className="container mt-3">
          <a style={{backgroundColor: '#f1f1f1', color: 'black', borderRadius: '50%', textDecoration: 'none', display: "inline-block", padding: '8px 16px', marginBottom: 10}} href="/personel-yonetim" >&#8249;</a>
      <br></br>
      <h2>Personel Düzenle - {employeeId}</h2>
      {employeeData && ( // Belirli bir kullanıcı verisi getirildiyse formu render et
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Görev:</label>
            <input type="text" className="form-control" id="title" name="title" placeholder={employeeData.title} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Departman:</label>
            <input type="text" className="form-control" id="department" name="department" placeholder={employeeData.department} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="militaryService" className="form-label">Askerlik Durumu:</label>
            <input type="text" className="form-control" id="militaryService" name="militaryService" placeholder={employeeData.militaryService} />
          </div>
  
          <div className="mb-3">
            <label htmlFor="drivingLicense" className="form-label">Ehliyet Durumu:</label>
            <input type="text" className="form-control" id="drivingLicense" name="drivingLicense" placeholder={employeeData.drivingLicense} />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Durum:</label>
            <select
              className="form-control"
              id="status"
              name="status"
              value={employeeData.status}
              onChange={(e) => setEmployeeData({...employeeData, status: e.target.value})}
            >
              <option value="ACTIVE">Aktif</option>
              <option value="INACTIVE">Pasif</option>
              <option value="BANNED">Engellenmiş</option>
              <option value="DELETED">Silinmiş</option>
            </select>
          </div>
  
          <button type="submit" className="btn btn-primary">Kaydet</button>
        </form>
      )}


    </div>    
  );
  
}

export default EditEmployee;
