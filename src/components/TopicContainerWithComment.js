import React from 'react';
import { Link } from 'react-router-dom';

const TopicContainerWithComment = ({ numberOfComent, content }) => {
  return (
    <Link to="/topic" className="topic-link">
      <div className="topic-container-comment">
        <div className="comment">
          <div className="comment-number">{numberOfComent}</div>
          <span>Comments</span>
        </div>
        {content}
      </div>
    </Link>
  );
};

export default TopicContainerWithComment;
