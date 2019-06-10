import React from 'react';
import { connect } from 'react-redux';
import TopicBoxContent from './TopicBoxContent';
import TopicContainerWithComment from './TopicContainerWithComment';

const TopicList = ({ title, topics }) => {
  return (
    <div className="topic-list">
      <h2>{title}</h2>
      {topics.map(topic => {
        return (
          <TopicContainerWithComment
            key={topic.id}
            numberOfComent={topic.commentsIDs.length}
            content={
              <TopicBoxContent
                body={header(topic.title)}
                tags={topic.tags}
                info={info(topic.date, topic.username)}
              />
            }
          />
        );
      })}
    </div>
  );
};

const header = question => {
  return <h3>{question}</h3>;
};

const info = (date, name, image = null) => {
  return (
    <div className="info">
      <span className="date">Posted {date}</span>
      <span className="name">{name}</span>
      {image ? <div className="image">{image}</div> : null}
    </div>
  );
};

const mapStateToProps = ({ topics }) => {
  return { topics };
};

export default connect(mapStateToProps)(TopicList);
