import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import CreateTopic from './CreateTopic';
import TwoColumn from './TwoColumn';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Header />
          {/* <SignUp /> */}
          {/* <LogIn /> */}
          <CreateTopic />
          {/* <TwoColumn /> */}
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
