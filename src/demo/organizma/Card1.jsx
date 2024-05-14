import React, { useState } from "react";
import photos5 from '../media/photos5.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Card1 = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fullName,setFullName] = useState('');     
  const [email,setEmail] = useState('');     
  const [title,setTitle] = useState('');     
  const [phoneNumber,setPhoneNumber] = useState('');     
  const [password,setPassword] = useState('');
  const navigate = useNavigate();


  const openModal = () => {
      setIsModalOpen(true);
      document.querySelector('.modal').style.display = 'flex';
  };

  const closeModal = () => {
      setIsModalOpen(false);
      document.querySelector('.modal').style.display = 'none';
  };

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
        navigate('/login-demo'); // Redirect to user page
      } else {
        console.error('Register failed:', response.data);
      }
    } catch (error) {
      console.error('Register error:', error);
      // Handle errors appropriately
    }
  }

    return (
        
        
        <div className="landingpage">
            <img src={photos5} class="video-bg"/>
            <div className="bg-overlay"></div>
            <div className="home-text">
                <h1 className="h1-1 home-s">simpleHRM</h1>
                <p className="home-s">"İnsanın Gücünü Platformumuzda Keşfedin."</p>
            </div>

            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center" style={{color: 'white'}}>Register</h1>
                    <h3 onClick={closeModal} id="modal-kapat">x</h3>
                    <div className="mb-3">
                        <input onChange={(evt)=>{setTitle(evt.target.value)}} type="text" className="form-control" id="title"  placeholder="Title"/>
                    </div>
                    <div className="mb-3">
                        <input onChange={(evt)=>{setFullName(evt.target.value)}} type="text" className="form-control" id="fullName" placeholder="Full Name"/>
                    </div>
                    <div className="mb-3">
                        <input onChange={(evt)=>{setEmail(evt.target.value)}} type="email" className="form-control" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="mb-3">
                        <input onChange={(evt)=>{setPhoneNumber(evt.target.value)}} type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                    
                    </div>
                    <div className="mb-3">
                        <input onChange={(evt)=>{setPassword(evt.target.value)}} type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" style={{color: 'white'}} >Check me out</label>
                    </div >
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
            <div className="home-btn">
                <a className="nav-link home-s" onClick={openModal}>Explore</a>
            </div>

        </div>
    )
}

export default Card1;
