import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CreateUser from './CreateUser/CreateUser';


const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState('');

  const handleLogIn = async () => {
    try {
      // Send login request and handle authentication
      const response = await axios.post('https://hospital-listing-app-backend.onrender.com/api/v1/user/login', {
        email,
        password,
      });
      setUserToken(response.data.token);
      
      // Check if the user is authenticated as an admin
      const { isAdmin } = response.data;
      
      if (isAdmin) {
        // Set state to indicate that the admin user is logged in
        setIsAdminLoggedIn(true);
        
        // Navigate to the CreateUser component
        navigate('/create-user');
      } else {
        // Handle other user roles or redirect to a different page
        navigate('/')
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>LogIn</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleLogIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
        {isAdminLoggedIn && <CreateUser />}
      </form>
    </div>
  );
};

export default LogIn;
