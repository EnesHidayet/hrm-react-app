import axios from "axios";
import { useState } from "react";

const ExpensesCard = () => {

    const token = (sessionStorage.getItem('token'));   
    const [price,setPrice] = useState('');     
    const [description,setDescription] = useState('');     
    const [date,setDate] = useState('');     
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8081/hrm/user/addExpenses', {
            token,
            price,
            description,
            date,
          });
    
          if (response.status === 200) {
            console.log('Register successful:', response.data);
          } else {
            console.error('Register failed:', response.data);
          }
        } catch (error) {
          console.error('Register error:', error);
          // Handle errors appropriately
        }
      }

  return (
    <>
        <form onSubmit={handleSubmit}>
            
            <div className="container border border-primary mt-5 wrapper fadeInDown" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            ,backgroundSize: '100% 100%', backgroundPosition: 'center', height:'600px'}}>
                <h1 style={{textAlign:'left', marginLeft:'6%', color:'#ded6c8'}}>Kullanıcı Harcama Beyanı</h1>
                <div className="row">
                    <div className="col-4">
                            <div className="mb-3" style={{marginTop:'20%', marginLeft:'20%'}}>
                                <input onChange={(evt)=>{setPrice(evt.target.value)}} className="form-control rounded" style={{width:'300px'}} type="text" placeholder="Fiyat" />
                            </div>
                            <div className="mb-3" style={{ marginLeft:'20%'}}>
                                <input onChange={(evt)=>{setDate(evt.target.value)}} className="form-control rounded" style={{width:'300px'}} type="date" placeholder=" Tarih"/>
                            </div>
                            <div className="mb-3" style={{marginLeft:'20%'}}>
                                <textarea onChange={(evt)=>{setDescription(evt.target.value)}} className="form-control rounded" style={{width:'300px',height:'150px'}} type="text" placeholder="Açıklama"/>
                            </div>
                            <div className="mb-3" style={{marginLeft:'20%'}}>
                                <button style={{width:'300px', backgroundColor: '#ded6c8'}} type="submit" className="btn text-center">Submit</button>
                            </div>
                    </div>
                    <div className="col-4">
                           
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </form>
    </>
  );
}

export default ExpensesCard;