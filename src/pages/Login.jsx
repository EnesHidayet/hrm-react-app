import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/hrm/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        const token = response.data.data; // Assuming token is in response.data.data
        setToken(token); // Update token state
        console.log('Token:', token);
        sessionStorage.setItem('token', token); // Store token in sessionStorage
        navigate('/user'); // Redirect to user page
      } else {
        console.error('Login failed:', response.data);
        alert('Kullanıcı Bulunamadı!')
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle errors appropriately
    }
  }

  return (
    <div className="container border mt-5 p-5">
      <h1 className="text-center mb-3">Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Giriş Yap</button>
      </form>

     
    </div>
  );
}

export default LoginPage;
