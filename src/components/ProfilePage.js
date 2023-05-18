import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { followUser, unfollowUser } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const ProfilePage = () => {
  const { username } = useParams();
  const userDetails = useSelector((state) => state.userList.find((user) => user.username === username));
  console.log(userDetails,"uhedbfnm")
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userDetails.id));
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userDetails.id));
  };

  if (!userDetails) {
    return <div>User not found</div>;
  }
return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={userDetails.profilePicture} alt={userDetails.name} />
        </div> 
        <div className="profile-info" style={{color:'white'}}>
          <h1>{userDetails.name}</h1>
          <h4>{userDetails.bio}</h4>
          <div className="followers">
            <span>{userDetails.connections}</span> connections
            {loggedInUser && loggedInUser.username !== userDetails.username && (
        <div className="profile-actions">
          {userDetails.isFollowing ? (
            <button onClick={handleUnfollow} className="btn btn-danger">
              Unfollow
            </button> 
          ) : (
            <button onClick={handleFollow} className="btn btn-primary">
              Follow 
            </button>
          )}
        </div>
      )}
          </div>
        </div>
      </div>
      
      <br/>
      <div className="profile-posts">
    {userDetails.recentPosts.map((post, index) => (
      <span className="post" key={index}> 
        <img src={post} alt="Post" />&nbsp;&nbsp;&nbsp;
      </span> 
    ))} 
  </div>
     
     
    </div>
  );
  
  
};

export default ProfilePage;
