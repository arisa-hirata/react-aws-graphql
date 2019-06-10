import { combineReducers } from 'redux';
import { LOGIN_USER, LOGOUT_USER, SELECT_TOPIC } from '../actions';

import dog from '../img/dog.jpg';

const userReducer = (state = testUser, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

const testUser = {
  id: 1,
  name: 'username',
  image: dog
};

const topicsReducer = (state = null, action) => {
  return topicsTestState;
};

let topicsTestState = [
  {
    id: 1,
    title: 'question1',
    description: 'description of question1',
    tags: ['dog', 'cat'],
    date: 'May 5, 2019 03:33',
    userId: 1,
    username: 'username1',
    image: dog,
    commentsIDs: [1, 2]
  },
  {
    id: 2,
    title: 'question1',
    description: 'description of question1',
    tags: ['dog'],
    date: 'May 25, 2019 03:33',
    userId: 2,
    username: 'username2',
    image: dog,
    commentsIDs: [3, 4, 5]
  }
];

const topicReducer = (state = topicTestState, action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

let commentsTestState = [
  {
    id: 1,
    date: 'May 5, 2019 03:33',
    userId: 1,
    username: 'username1',
    image: '',
    text: 'answer'
  },
  {
    id: 2,
    date: 'April 15, 2019 03:33',
    userId: 2,
    username: 'username2',
    image: '',
    text: 'answer!2'
  }
];

let topicTestState = {
  id: 1,
  title: 'question1',
  description: 'description of question1',
  tags: ['dog', 'cat'],
  date: 'May 5, 2019 03:33',
  userId: 1,
  username: 'username1',
  image: dog,
  comments: commentsTestState
};

export default combineReducers({
  user: userReducer,
  topic: topicReducer,
  topics: topicsReducer
});
