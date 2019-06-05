import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='ui secondary pointing menu container'>
        <a className='item'>
          <h1>
            <i className='paw icon' />
            Pawpaw
          </h1>
        </a>
        <div className='right menu'>
          <div className='ui search'>
            <div className='ui icon input'>
              <input
                className='prompt'
                type='text'
                placeholder='Common passwords...'
              />
              <i className='search icon' />
            </div>
            {/* DROP DOWN */}
            {/* <div className='results transition visible'>
              <a className='result'>
                <div className='content'>
                  <div className='title'>asdfgh</div>
                </div>
              </a>
              <a className='result'>
                <div className='content'>
                  <div className='title'>asdf</div>
                </div>
              </a>
              <a className='result'>
                <div className='content'>
                  <div className='title'>asdfasdf</div>
                </div>
              </a>
            </div> */}
          </div>
          <button className='positive ui button'>Sign out</button>
          <div className='user' />
        </div>
      </div>
    </header>
  );
};

export default Header;
