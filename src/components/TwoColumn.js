import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const TwoColumn = ({ children }) => {
  return (
    <div className='ui container two-column'>
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
};

export default TwoColumn;
