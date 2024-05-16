import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserExpensesList = () => {
  const [expensesData, setExpensesData] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8081/hrm/user/getExpenses",{token});
        setExpensesData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching personnel data:", error);        
      }
    };

    fetchData();
  }, []);

  return (
    <div className='personnel-table'>
      <br></br>
      <h1 style={{textAlign:'center'}}>Harcamalarım</h1>
      <table style={{width:'100%'}}>
        <thead className='table-light'>
          <tr>
            <th>ID</th>
            <th>Fiyat</th>
            <th>Tarih</th>
            <th>Açıklama</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.map(expenses => (
            <tr key={expenses.id}>
              <td>{expenses.id}</td>
              <td>{expenses.price}</td>
              <td>{expenses.date}</td>
              <td>{expenses.description}</td>
              <td>{expenses.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserExpensesList;