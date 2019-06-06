import React from 'react';
import OneColumn from './OneColumn';

const CreateTopic = () => {
  return (
    <OneColumn title='Create Topic'>
      <div className='ui form textarea'>
        <div className='field'>
          <label>Title</label>
          <input />
        </div>
        <div className='field'>
          <label>Post</label>
          <textarea />
        </div>
        <div className='field'>
          <label>Tag</label>
          <textarea />
        </div>
        <button className='positive ui button center'>Create</button>
      </div>
    </OneColumn>
  );
};

export default CreateTopic;
