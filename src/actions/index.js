// USER
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
// TOPIC
export const SELECT_TOPIC = 'SELECT_TOPIC';

export const loginUser = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const selectTopic = topic => {
  return {
    type: SELECT_TOPIC,
    topic
  };
};
