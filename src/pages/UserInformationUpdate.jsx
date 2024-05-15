import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserInformationUpdate() {
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        setEmail(storedEmail);
        getUserData(storedEmail);
    }, []);

    async function getUserData(userEmail) {
        try {
            const response = await axios.post('http://localhost:8081/hrm/user/find-user-by-email', { email: userEmail});
            setUser(response.data);
            setAddress(response.data.address);
            setPhoneNumber(response.data.phoneNumber);
            setImage(response.data.image);
        } catch (error) {
            console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error.response ? error.response.data : error.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8081/hrm/user/update-user-info', {
                email,
                image,
                address,
                phoneNumber,
            });
    
            if (response.status === 200) {
                console.log('KULLANICI GÜNCELLENDİ:', response.data);
                navigate('/profile'); // Profil sayfasına yönlendirilebilir
            } else {
                console.error('Kullanıcı Güncellenemedi:', response.data);
                alert('Kullanıcı Güncellenemedi!');
            }
        } catch (error) {
            console.error('Update Error:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className="container border radius mt-5" style={{ width: 400, height: 600, overflowX: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <div className="text-center mt-2">
                    <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" style={{ width: 60 }} alt="User" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Employee Id</label>
                    <input type="text" className="form-control" disabled value={user.id || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Identity Number</label>
                    <input type="text" className="form-control" disabled value={user.identityNumber || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" disabled value={user.fullName || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" disabled value={email || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Birth Date</label>
                    <input type="text" className="form-control" disabled value={user.birthDate || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input onChange={(evt) => setPhoneNumber(evt.target.value)} type="text" className="form-control" value={phoneNumber || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input onChange={(evt) => setAddress(evt.target.value)} type="text" className="form-control" value={address || ''} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input onChange={(evt) => setImage(evt.target.value)} type="text" className="form-control" value={image || ''} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UserInformationUpdate;
