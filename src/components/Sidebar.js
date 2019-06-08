import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='#'>Tags</NavLink>
      {/* temporary nav start */}
      <br />
      <NavLink to='/signup'>signup</NavLink>
      <br />
      <NavLink to='/login'>login</NavLink>
      <br />
      <NavLink to='/create-topic'>create-topic</NavLink>
      <br />
      <NavLink to='/topic'>topic</NavLink>
      <br />
      <NavLink to='/user'>user</NavLink>
      <br />
      {/* temporary nav end */}
    </div>
  );
};

export default Sidebar;
