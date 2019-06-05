import React from 'react';

const Main = props => {
  return (
    <main>
      <div className='create-button'>
        <button className='ui red button right floated'>Create Topic</button>
      </div>
      {props.children}
    </main>
  );
};

export default Main;
