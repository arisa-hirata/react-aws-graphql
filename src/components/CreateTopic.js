import React from 'react';
import OneColumn from './OneColumn';

const CreateTopic = () => {
  return (
    <OneColumn title="Ask Question">
      <div className="ui form textarea">
        <div className="field">
          <label>Title</label>
          <input placeholder="Type title here..." />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea placeholder="Write your description here..." />
        </div>
        <div className="field">
          <label>Tag</label>
          <textarea placeholder="Add tags..." />
        </div>
        <button className="positive btn ui button center">Create</button>
      </div>
    </OneColumn>
  );
};

export default CreateTopic;
