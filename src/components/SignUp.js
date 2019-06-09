import React from 'react';
import OneColumn from './OneColumn';

const SignUp = () => {
  return (
    <OneColumn title="Sign up">
      <div className="input-form">
        <div className="ui labeled input">
          <label htmlFor="user-name" className="ui label">
            <i className="user icon" />
          </label>
          <input type="text" placeholder="User Name" id="user-name" />
        </div>
        <br />
        <div className="ui labeled input">
          <label htmlFor="email" className="ui label">
            <i className="mail icon" />
          </label>
          <input type="text" placeholder="Email" id="email" />
        </div>
        <br />
        <div className="ui labeled input">
          <label htmlFor="password" className="ui label">
            <i className="key icon" />
          </label>
          <input type="password" placeholder="Password" id="password" />
        </div>
        <br />
        <button className="btn">Sign Up</button>
      </div>
    </OneColumn>
  );
};

export default SignUp;
