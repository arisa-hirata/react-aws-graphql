import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OneColumn from './OneColumn';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = e => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const logIn = () => {
    // access to dynamoDB
  };

  return (
    <OneColumn title="Log In">
      <div className="log-in input-form">
        <div className="ui labeled input">
          <label htmlFor="email" className="ui label">
            <i className="mail icon" />
          </label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <br />
        <div className="ui labeled input">
          <label htmlFor="password" className="ui label">
            <i className="key icon" />
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <br />
        <button onClick={logIn} className="btn">
          Log In
        </button>
        <div className="to-signup">
          You don't have account?
          <Link to="/signup">
            <span className="signup-link"> &nbsp;&nbsp;Sign Up</span>
          </Link>
        </div>
      </div>
    </OneColumn>
  );
};

export default LogIn;
