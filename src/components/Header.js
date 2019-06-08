import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/Logo.svg';

const Header = () => {
  return (
    <header>
      <div className="ui secondary pointing menu container">
        <Link to="/">
          <Logo className="logo" />
          {/* <h1>
            <i className="paw icon" />
            Pawpaw
          </h1> */}
        </Link>
        <div className="right menu">
          <div className="ui search">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..." />
              <i className="search icon" />
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
          <Link to="/login" className="loginBtn">
            <button className="btn">Log in</button>
          </Link>
          <Link to="/user" className="user">
            <img src={require('../img/defaultIcon.svg')} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
