import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import User from './User';

const TwoColumn = () => {
  return (
    <div className='ui container two-column'>
      <Sidebar />
      <Main>
        <User />
      </Main>
    </div>
  );
};

export default TwoColumn;
