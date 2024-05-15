import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddComment = ({ closeModal }) => {
  const [comment, setComment] = useState('');
  const [user, setUser] = useState({ name: '', avatarSrc: '' });

  // useEffect kullanarak bileşen yüklendiğinde kullanıcı bilgilerini alma
  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem('token');
      console.log('Token:', token); // Log token here

      if (token) {
        try {
            const response = await axios.post('http://localhost:8081/hrm/user/find-user-by-token', { token });
            console.log('Sent token:', token);
          
          const userData = response.data;
          const name = response.data.fullName || 'Anonim Kullanıcı';  // Varsayılan isim
          const avatarSrc = response.data.image || 'default-avatar.png';  // Varsayılan avatar

          setUser({ name, avatarSrc });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      name: user.name,
      avatarSrc: user.avatarSrc,
      content: comment
    };

    console.log('CommentData', commentData);  // commentData'yı konsola yazdırın

    try {
      const response = await axios.post('http://localhost:8081/hrm/user/add-comment', commentData);
      console.log('Comment added:', response.data);
      setComment(''); // Yorum alanını temizle
      closeModal();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className='login-box'>
        <form onSubmit={handleSubmit}>
            <h1 className="text-center" style={{color: 'white'}}>Yorum Yap</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="comment" 
                    value={comment} 
                    onChange={handleCommentChange} 
                    required 
                    placeholder="Yorumunuzu buraya yazın..."
                />
            </div>
            <button type="submit" className="btn btn-primary">Yorum Gönder</button>
        </form>
    <br />
    <a href="/user-Demo">&#8249;</a> 
    </div>

  );
};

export default AddComment;
