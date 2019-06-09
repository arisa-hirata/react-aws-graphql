import React from 'react';
import Tags from './Tags';

const TopicBox = ({ body, image, tags = null, info, icon = null }) => {
  return (
    <div className="topic-box-content">
      <div>
        <div className="topic-box-content-img">
          <img
            src={image ? image : require('../img/dog.jpg')}
            className="topic-img"
          />
        </div>
        <div className="topic-box-content-desc">{body}</div>
      </div>
      {tags ? <Tags tags={tags} /> : null}
      <div className="info">
        {info}
        <img
          src={icon ? icon : require('../img/defaultIcon.svg')}
          className="defaulticons"
        />
      </div>
    </div>
  );
};

export default TopicBox;
