import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword(){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8080/hrm/auth/forgot-password', {
            email
          });
    
          if (response.status === 200) {
            console.log('Send Mail successful:', response.data);
            navigate('/'); // Redirect to user page
          } else {
            console.error('Mail failed:', response.data);
          }
        } catch (error) {
          console.error('Mail error:', error);
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default ForgotPassword;