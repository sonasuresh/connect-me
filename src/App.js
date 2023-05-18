import React,{useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import LoginPage from './pages/Login';
import UserPage from './pages/UserPage';
import ProfilePage from './components/ProfilePage';
import { setLoggedInUser } from './redux/actions';

function App() {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const handleLogin = (user) => {
    // Perform login logic

    // Set the logged-in user in Redux
    dispatch(setLoggedInUser(user));

    // Navigate to UserList page
    navigate('/userlist');
  };

  const handleLogout = () => {
    // Reset the logged-in user in Redux
    dispatch(setLoggedInUser(null));

    // Navigate to Login page
    navigate('/login');
  };

  useEffect(() => {
    // Check if the page is refreshed
    const isReloaded = !window.performance.navigation.type;

    if (isReloaded) {
      // Perform logout logic
      handleLogout();
    }
  }, []);

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
      <hr/>
      <div className="container mt-4">
        <Routes>
          {loggedInUser && (
            <Route
              exact
              path="/profile/:username"
              element={<ProfilePage />}
            />
          )}
          <Route exact path="/userlist" element={<UserPage />} />
          <Route exact path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
