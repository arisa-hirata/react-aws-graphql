import React from 'react';

const OneColumn = ({ title, children }) => {
  return (
    <div className='one-column ui container'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default OneColumn;
