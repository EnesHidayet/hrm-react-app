import React, { useState } from "react";
import PersonelListesi from "../components/molekul/PersonelListesi";
import AddEmployee from "./AddNewEmployee";

function PersonelYonetim({ id, isModalOpen, closeModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isPersonelListVisible, setIsPersonelListVisible] = useState(false);
  const [isAddEmployeeVisible, setIsAddEmployeeVisible] = useState(false);

  const togglePersonelListesi = () => {
    setIsPersonelListVisible(!isPersonelListVisible);
    // Yeni personel ekleme formunu gizle
    setIsAddEmployeeVisible(false);
  };

  const toggleAddEmployee = () => {
    setIsAddEmployeeVisible(!isAddEmployeeVisible);
    // Personel listesini gizle
    setIsPersonelListVisible(false);
  };

  return (
    <div className="personel-box" style={{ display: isModalOpen ? 'flex' : 'none' }}>
      <h3 onClick={() => closeModal(id)} id="modal-kapat">x</h3>
      <div className="personel-buttons">
        <button onClick={togglePersonelListesi}>
          {isPersonelListVisible ? "Personel Listesini Gizle" : "Personel Listesini Göster"}
        </button>
        <button onClick={toggleAddEmployee}>
          {isAddEmployeeVisible ? "Yeni Personel Ekleme Formunu Gizle" : "Yeni Personel Ekleme Formunu Göster"}
        </button>
      </div>
      {isPersonelListVisible && (
        <div className="personel-listesi-container">
          <PersonelListesi />
        </div>
      )}
      {isAddEmployeeVisible && (
        <div className="add-employee-container">
          <AddEmployee />
        </div>
      )}
    </div>
  );
}

export default PersonelYonetim;
