import React from 'react';
import Tags from './Tags';

const UserTopicBox = ({ body, tags = null, info, icon = null }) => {
  return (
    <div className="topic-box-content">
      {/* When user click trush icon, a popup "are you sure? the topic is delated permanentry" is shown up */}
      <label>
        <i className="trash alternate icon" />
      </label>
      {body}
      {tags ? <Tags tags={tags} /> : null}
      <div className="info">{info}</div>
    </div>
  );
};

export default UserTopicBox;
