import React from 'react';
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <main>
      <div className='create-button'>
        <Link to='/create-topic'>
          <button className='ui red button right floated'>Create Topic</button>
        </Link>
      </div>
      {props.children}
    </main>
  );
};

export default Main;
