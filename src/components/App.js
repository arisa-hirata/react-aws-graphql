import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import CreateTopic from './CreateTopic';
import TwoColumn from './TwoColumn';
import Topic from './Topic';
import User from './User';
import TopicList from './TopicList';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Header />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/create-topic' component={CreateTopic} />
          <TwoColumn>
            <Route path='/topic' component={Topic} />
            <Route path='/user' component={User} />
            <Route
              path='/'
              exact
              render={() => <TopicList title='Top Topics' />}
            />
          </TwoColumn>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
