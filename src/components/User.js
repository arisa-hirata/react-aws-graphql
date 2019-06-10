import React from 'react';
import { connect } from 'react-redux';
import UserTopicBox from './UserTopicBox';
import TopicContainerWithComment from './TopicContainerWithComment';

const User = ({ image, topics }) => {
  return (
    <div className="user-page">
      <div className="user-page-img-container">
        <img
          src={image ? image : require('../img/defaultIcon.svg')}
          className="defaultImg"
        />
      </div>
      <h2>User Name</h2>
      {topics
        ? topics.map(topic => {
            return (
              <TopicContainerWithComment
                key={topic.id}
                numberOfComent={topic.commentsIDs.length}
                content={
                  <UserTopicBox
                    body={header(topic.title)}
                    tags={topic.tags}
                    info={info(topic.date)}
                    icon={icon(1)}
                  />
                }
              />
            );
          })
        : null}
    </div>
  );
};

const header = question => {
  return <h3>{question}</h3>;
};

const info = date => {
  return (
    <div className="info">
      <span className="date">Posted {date}</span>
    </div>
  );
};

const icon = id => {
  return (
    <i onClick={() => handleDeleteClick(id)} className="trash alternate icon" />
  );
};

const handleDeleteClick = id => {
  console.log(id, 'delete');
};

const mapStateToProps = state => {
  return { topics: state.topics };
};

export default connect(mapStateToProps)(User);
