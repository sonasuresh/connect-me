import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedInUser, onLogout }) => {
 const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));
  
  const handleLogout = () => {
    // Clear the user's login information from local storage
    localStorage.removeItem('loggedInUser');
    // Trigger the onLogout function passed from the App component
    onLogout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ffb6c100',fontWeight:'bold'}}> 
      <div className="container">
        <Link to="/" className="navbar-brand">Connect Me</Link>
        <ul className="navbar-nav">
          {loggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/userlist" className="nav-link">User List</Link>
              </li>
              <li className="nav-item">
                <Link to={`/profile/${loggedIn.username}`} className="nav-link">Profile Page</Link>

              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          )}
        </ul>
      </div>

      <hr/>
    </nav>
  );
};

export default Navbar;
