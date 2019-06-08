import React from 'react';
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <main>
      <div className='create-button'>
        <Link to='/create-topic'>
          <button className='ui btn button right floated'>Ask Question</button>
        </Link>
      </div>
      {props.children}
    </main>
  );
};

export default Main;
