import React, { useState } from "react";
import ManagerExpenses from "../components/organizma/ManagerExpensesList";
import AddExpenses from "../components/organizma/ExpensesCard";
import UserExpenses from "../components/organizma/UserExpensesList"

function ExpensesYonetim({ id, isModalOpen, closeModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isManagerExpensesVisible, setIsManagerExpensesVisible] = useState(false);
  const [isAddExpensesVisible, setIsAddExpensesVisible] = useState(false);
  const [isUserExpensesVisible, setIsUserExpensesVisible] = useState(false);

  const toggleManagerExpenses = () => {
    setIsManagerExpensesVisible(!isManagerExpensesVisible);
    
    setIsAddExpensesVisible(false);
    setIsUserExpensesVisible(false);
  };

  const toggleAddExpenses = () => {
    setIsAddExpensesVisible(!isAddExpensesVisible);
    
    setIsManagerExpensesVisible(false);
    setIsUserExpensesVisible(false);
  };

  const toggleUserExpenses = () => {
    setIsUserExpensesVisible(!isUserExpensesVisible);
    
    setIsManagerExpensesVisible(false);
    setIsAddExpensesVisible(false);
  };

  return (
    <div className="personel-box" style={{ display: isModalOpen ? 'flex' : 'none' }}>
      <h3 onClick={() => closeModal(id)} id="modal-kapat">x</h3>
      <div className="personel-buttons">
        <button onClick={toggleManagerExpenses}>
          {isManagerExpensesVisible ? "Personel Harcamaları Listesini Gizle" : "Personel Harcamaları Listesini Göster"}
        </button>
        <button onClick={toggleAddExpenses}>
          {isAddExpensesVisible ? "Yeni Harcama Ekleme Formunu Gizle" : "Yeni Harcama Ekleme Formunu Göster"}
        </button>
        <button onClick={toggleUserExpenses}>
          {isUserExpensesVisible ? "Harcamalarım Listesini Gizle" : "Harcamalarım Listesini Göster"}
        </button>
      </div>
      {isManagerExpensesVisible && (
        <div className="personel-listesi-container">
          <ManagerExpenses />
        </div>
      )}
      {isAddExpensesVisible && (
        <div className="add-employee-container">
          <AddExpenses />
        </div>
      )}
      {isUserExpensesVisible && (
        <div className="add-employee-container">
          <UserExpenses />
        </div>
      )}
    </div>
  );
}

export default ExpensesYonetim;
