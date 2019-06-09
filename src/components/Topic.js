import React from 'react';
import TopicBox from './TopicBox';
import CommentBox from './CommentBox';

const Topic = () => {
  return (
    <div className="topic">
      <div className="topic-box">
        <h2>title</h2>
        <TopicBox
          body={description('descriptiondescriptiondescription.')}
          tags={['dog', 'cat', 'mouse']}
          info={info('May 5, 2019 03:33', 'User name')}
        />
      </div>
      <div className="comments">
        <CommentBox
          name={'username'}
          image={'image'}
          comment={
            'descriptiondescriptiondescriptiondescriptiondescriptiondescription'
          }
        />
        <CommentBox
          name={'username'}
          image={'image'}
          comment={
            'descriptiondescriptiondescriptiondescriptiondescriptiondescription'
          }
        />
      </div>
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

export default Topic;
