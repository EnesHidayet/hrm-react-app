import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){

    const [fullName,setFullName] = useState('');     
    const [email,setEmail] = useState('');     
    const [title,setTitle] = useState('');     
    const [phoneNumber,setPhoneNumber] = useState('');     
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8080/hrm/auth/register', {
            fullName,
            email,
            title,
            phoneNumber,
            password,
          });
    
          if (response.status === 200) {
            console.log('Register successful:', response.data);
            navigate('/login'); // Redirect to user page
          } else {
            console.error('Register failed:', response.data);
          }
        } catch (error) {
          console.error('Register error:', error);
          // Handle errors appropriately
        }
      }

    return(
        <div className="container border border-primary mt-5 wrapper fadeInDown" style={{width: '400px', height: '620px'}}>
            <div>
                <h1 className='text-center mt-2 p-2'>Register</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input onChange={(evt)=>{setTitle(evt.target.value)}} type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Full Name</label>
                    <input onChange={(evt)=>{setFullName(evt.target.value)}} type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email Address</label>
                    <input onChange={(evt)=>{setEmail(evt.target.value)}} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone Number</label>
                    <input onChange={(evt)=>{setPhoneNumber(evt.target.value)}} type="text" className="form-control" id="phoneNumber" />
                   
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={(evt)=>{setPassword(evt.target.value)}} type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Check me out</label>
                </div >
                <div className="text-end">
                    <button type="submit" className="btn btn-primary text-end">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

        export default Register;