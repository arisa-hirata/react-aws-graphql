import React from 'react';
import TopicBoxContent from './TopicBoxContent';

const CommentBox = ({ name, image, comment, icon = null }) => {
  return (
    <div className="comment-box">
      <div className="user">
        <img
          src={icon ? icon : require('../img/defaultIcon.svg')}
          className="defaulticons"
        />
        {name}
      </div>
      <TopicBoxContent body={body(comment)} info={info('May 25, 2019 23:43')} />
    </div>
  );
};

const body = comment => {
  return <p>{comment}</p>;
};

const info = date => {
  return (
    <div className="info">
      <span className="date">Posted {date}</span>
    </div>
  );
};

export default CommentBox;
