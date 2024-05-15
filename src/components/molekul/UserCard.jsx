import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserCard.css';

function UserCard() {
    const [user, setUser] = useState({
        name: 'Anonim Kullanıcı',
        avatarSrc: 'https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI',
        title: 'Anonim',
      });
    
    useEffect(() => {
        const fetchUserData = async () => {
            const token = sessionStorage.getItem('token');
            console.log('Token:', token); // Log token here

            if (token) {
                try {
                    const response = await axios.post('http://localhost:8081/hrm/user/find-user-by-token', { token });
                    console.log('Sent token:', token);

                    const userData = response.data;
                    const name = userData.fullName || 'Anonim Kullanıcı';  // Default name
                    const avatarSrc = userData.image || 'default-avatar.png';  // Default avatar
                    const title = userData.title || 'Patron';  // Default title

                    setUser({ name, avatarSrc, title });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className='user-card mt-2'>
            <img className='image' src={user.avatarSrc} alt="User Avatar" />
            <div className='title'>
                <p className='name'>{user.name}</p>
                <h5>{user.title}</h5>
            </div>
        </div>
    );
}

export default UserCard;
