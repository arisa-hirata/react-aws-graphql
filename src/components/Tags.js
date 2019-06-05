import React from 'react';

const Tags = props => {
  return (
    <ul className='tags'>
      {props.tags.map((tag, index) => {
        return (
          <li key={index} className='ui label'>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
