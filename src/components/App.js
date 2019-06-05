import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import TwoColumn from './TwoColumn';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Header />
          <TwoColumn />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
