import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import User from './User';
import TopicList from './TopicList';
import Topic from './Topic';

const TwoColumn = ({ children }) => {
  return (
    <div className='ui container two-column'>
      <Sidebar />
      <Main>
        {children}
        {/* <User /> */}
        {/* <TopicList title={'Top Topics'} /> */}
        {/* <Topic /> */}
      </Main>
    </div>
  );
};

export default TwoColumn;
