
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './HomeDemo.css'

function Login({ setToken }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem('userEmail', email);

    try {
      const response = await axios.post('http://localhost:8080/hrm/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        const token = response.data.data; // Assuming token is in response.data.data
        setToken(token); // Update token state
        sessionStorage.setItem('token', token); // Store token in sessionStorage
        navigate('/user-Demo'); // Redirect to user page
      } else {
        console.error('Login failed:', response.data);
        alert('Kullanıcı Bulunamadı!')
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle errors appropriately
    }
  }

    return(
            <div className='login-box' >
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center" style={{color: 'white'}}>Login</h1>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email Address"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" style={{color: 'white'}} >Check me out</label>
                    </div >
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>

                <a href="/forgot-password" id="/forgot-password">Şifrenizi mi unuttunuz?</a>

            </div>
            
    )
}

export default Login;