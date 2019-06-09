import React from 'react';
import Tags from './Tags';

const TopicBoxContent = ({ body, tags = null, info, icon = null }) => {
  return (
    <div className="topic-box-content">
      {body}
      {tags ? <Tags tags={tags} /> : null}
      <div className="info">{info}</div>
    </div>
  );
};

export default TopicBoxContent;
