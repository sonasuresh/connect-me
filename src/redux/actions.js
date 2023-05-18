// Action types
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const followUser = (userId) => ({
  type: FOLLOW_USER,
  payload: userId,
});

export const unfollowUser = (userId) => ({
  type: UNFOLLOW_USER,
  payload: userId,
});

export const RESET_STATE = 'RESET_STATE';

export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

export const setLoggedInUser = (user) => {
  return {
    type: SET_LOGGED_IN_USER,
    payload: user,
  };
};

