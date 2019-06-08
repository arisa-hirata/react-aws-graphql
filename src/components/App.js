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
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/create-topic" component={CreateTopic} />
          <Route
            path="/topic"
            render={() => (
              <TwoColumn>
                <Topic />
              </TwoColumn>
            )}
          />
          <Route
            path="/user"
            render={() => (
              <TwoColumn>
                <User />
              </TwoColumn>
            )}
          />
          <Route
            path="/"
            exact
            render={() => (
              <TwoColumn>
                <TopicList title="Top Topics" />
              </TwoColumn>
            )}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
