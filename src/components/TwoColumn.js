import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const TwoColumn = () => {
  return (
    <div className='ui container two-column'>
      <Sidebar />
      <Main>CONTENT</Main>
    </div>
  );
};

export default TwoColumn;
