import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; // Import the desired icon from react-icons

const User = ({ user, handleFollow, handleUnfollow }) => {
  const navigate = useNavigate();
  const gotoprofile = (name) => {
    navigate(`/profile/${name}`);
  };

  return (
    <div className="col-md-4 mb-4 user-card">
      <div className="card">
        <img src={user.profilePicture} className="card-img-top" alt={user.name} />
        <div className="card-body">
          <h5 className="card-title" style={{color:'#aa5eb5'}} onClick={() => gotoprofile(user.username)}>
            {user.name} <BsArrowRight /> {/* Add the icon component */}
          </h5>
          <p className="card-text text-muted mb-3">{user.connections} connections</p>
          {user.isFollowing ? (
            <button onClick={() => handleUnfollow(user.id)} className="btn btn-danger">
              Unfollow
            </button>
          ) : (
            <button onClick={() => handleFollow(user.id)} className="btn btn-primary">
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
