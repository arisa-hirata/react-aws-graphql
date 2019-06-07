import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/'>
        <button className='positive ui button'>Home</button>
      </Link>
      <button className='positive ui button'>Tags</button>
      <Link to='/signup'>signup</Link>
      <br />
      <Link to='/login'>login</Link>
      <br />
      <Link to='/create-topic'>create-topic</Link>
      <br />
      <Link to='/topic'>topic</Link>
      <br />
      <Link to='/user'>user</Link>
      <br />
    </div>
  );
};

export default Sidebar;
