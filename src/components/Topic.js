import React from 'react';
import { connect } from 'react-redux';
import TopicBox from './TopicBox';
import CommentBox from './CommentBox';

const Topic = ({ topic }) => {
  return (
    <div className="topic">
      <div className="topic-box">
        <h2>{topic.title}</h2>
        <TopicBox
          body={description(topic.description)}
          tags={topic.tags}
          info={info(topic.date, topic.username)}
        />
      </div>
      {topic.comments ? (
        <div className="comments">
          {topic.comments.map(comment => {
            return (
              <CommentBox
                key={comment.id}
                name={comment.username}
                image={'image'}
                comment={comment.text}
                date={comment.date}
              />
            );
          })}
        </div>
      ) : null}
      <div className="ui form textarea">
        <div className="field">
          <label>
            <i className="pencil alternate icon" />
            Comment
          </label>
          <textarea placeholder="Write your comment here..." />
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

const description = description => {
  return <p>{description}</p>;
};

const info = (date, name, image) => {
  return (
    <div className="info">
      <span className="date">Posted {date}</span>
      <span className="name">{name}</span>
      <div className="image">{image}</div>
    </div>
  );
};

const mapStateToProps = ({ topic }) => {
  return {
    topic
  };
};

export default connect(mapStateToProps)(Topic);
