import React, { useState } from 'react';
import loginData from '../data/LoginData';
import './Login.css'; 

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the username and password match
    const user = loginData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Store the user's login information in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // Trigger the onLogin function passed from the App component
      onLogin(user);

    } else {
      alert('Invalid username or password');
    }
  };

  return (
 <div className="container">
<div className="row justify-content-center mt-5">
  <div className="col-lg-4">
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> <br/>
          <div className="text-center">
            <button className="btn-color" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div> 

  );
}

export default LoginPage;
