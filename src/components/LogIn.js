import React from 'react';
import OneColumn from './OneColumn';

const LogIn = () => {
  return (
    <OneColumn title='Log In'>
      <div className='input-form'>
        <div className='ui labeled input'>
          <label for='email' className='ui label'>
            <i className='mail icon' />
          </label>
          <input type='text' placeholder='Email' id='email' />
        </div>
        <br />
        <div className='ui labeled input'>
          <label for='password' className='ui label'>
            <i className='key icon' />
          </label>
          <input type='password' placeholder='Password' id='password' />
        </div>
        <br />
        <button className='positive ui button'>Log In</button>
        <div>
          You don't have account?{' '}
          <button className='positive ui button'>Sign Up</button>
        </div>
      </div>
    </OneColumn>
  );
};

export default LogIn;
