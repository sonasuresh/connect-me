import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from '../redux/actions';
import users from '../data/Users';
import User from '../components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const UserPage = () => {
  const userList = useSelector((state) => state.userList);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const dispatch = useDispatch();

  const handleFollow = (userId) => {
    dispatch(followUser(userId));
  };

  const handleUnfollow = (userId) => {
    dispatch(unfollowUser(userId));
  };

  return (
    <div>
      <h1 className="mb-4 user-text-color">Users</h1>
      <div className="row">
        {userList.map((user) => (
          loggedInUser && loggedInUser.username !== user.username &&
          <User
            key={user.id}
            user={user}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
