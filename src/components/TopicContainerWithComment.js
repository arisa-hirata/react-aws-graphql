import React from 'react';

const TopicContainerWithComment = ({ numberOfComent, content }) => {
  return (
    <div className='topic-container-comment'>
      <div className='comment'>
        <div>
          <strong>{numberOfComent}</strong>
        </div>
        <span>Comments</span>
      </div>
      {content}
    </div>
  );
};

export default TopicContainerWithComment;
