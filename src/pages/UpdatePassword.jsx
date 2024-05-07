import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePasswordPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();

     async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8080/hrm/auth/update-password', {
            email,
            password,
            rePassword
          });
    
          if (response.status === 200) {
            console.log('Update successful:', response.data);
            navigate('/login'); // Redirect to user page
          } else {
            console.error('Update failed:', response.data);
          }
        } catch (error) {
          console.error('Update error:', error);
          // Handle errors appropriately
        }
      }


    return(
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm New Password"
                value={rePassword}
                onChange={(event) => setRePassword(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
    );
    }
export default UpdatePasswordPage;