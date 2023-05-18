import { FOLLOW_USER, UNFOLLOW_USER, RESET_STATE, SET_LOGGED_IN_USER } from './actions';
import users from '../data/Users';

const initialUserListState = users;
const initialFollowingDataState = {};

const userListReducer = (state = initialUserListState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return state.map((user) => {
        if (user.id === action.payload && !user.isFollowing) {
          return { ...user, isFollowing: true, connections: user.connections + 1 };
        }
        return user;
      });

    case UNFOLLOW_USER:
      return state.map((user) => {
        if (user.id === action.payload && user.isFollowing) {
          return { ...user, isFollowing: false, connections: user.connections - 1 };
        }
        return user;
      });

    case RESET_STATE:
      return initialUserListState;

    default:
      return state;
  }
};

const followingDataReducer = (state = initialFollowingDataState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return { ...state, [action.payload]: true };

    case UNFOLLOW_USER:
      const { [action.payload]: deletedValue, ...updatedFollowingData } = state;
      return updatedFollowingData;

    case RESET_STATE:
      return initialFollowingDataState;

    default:
      return state;
  }
};

const loggedInUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.payload;

    case RESET_STATE:
      return null;

    default:
      return state;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    userList: userListReducer(state.userList, action),
    followingData: followingDataReducer(state.followingData, action),
    loggedInUser: loggedInUserReducer(state.loggedInUser, action),
  };
};

export default rootReducer;
