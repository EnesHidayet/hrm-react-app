import  { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerExpensesList = () => {
  const [expensesData, setExpensesData] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8081/hrm/user/getExpensesByManager",{token});
        setExpensesData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching personnel data:", error);        
      }
    };

    fetchData();
  }, []);

  const handleApproval = async (expensesId, token) => {
    try {
      const response = await axios.post("http://localhost:8081/hrm/user/approvedExpenses", {
        token,
        expensesId,
      });
      console.log(response.data); // Başarılı onay yanıtını işleyin (isteğe bağlı)
    } catch (error) {
      console.error("Harcamayı onaylama hatası:", error);
    }
  };

  return (
    <div className='personnel-table'>
      <br></br>
      <h1 style={{textAlign:'center'}}>Harcamalar Listesi</h1>
      <table style={{width:'100%'}}>
        <thead className='table-light'>
          <tr>
            <th>ID</th>
            <th>Personel</th>
            <th>Fiyat</th>
            <th>Tarih</th>
            <th>Açıklama</th>
            <th>Durum</th>
            <th>Onay Butonu</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.map(expenses => (
            <tr key={expenses.expensesId}>
              <td>{expenses.expensesId}</td>
              <td>{expenses.userFullName}</td>
              <td>{expenses.price}</td>
              <td>{expenses.date}</td>
              <td>{expenses.description}</td>
              <td>{expenses.status}</td>
              <td>
                <button className='btn btn-primary' onClick={()=>{handleApproval(expenses.expensesId,token)}}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerExpensesList;