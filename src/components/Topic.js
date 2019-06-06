import React from 'react';
import TopicBoxContent from './TopicBoxContent';
import CommentBox from './CommentBox';

const Topic = () => {
  return (
    <div className='topic'>
      <div className='topic-box'>
        <h2>title</h2>
        <TopicBoxContent
          body={description('descriptiondescriptiondescription.')}
          tags={['dog', 'cat', 'mouse']}
          info={info('May 25, 2019 23:43', 'User name')}
        />
      </div>
      <div className='comments'>
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
      <div className='ui form textarea'>
        <div className='field'>
          <label>
            <i className='pencil alternate icon' />
            Comment
          </label>
          <textarea />
          <button class='positive ui button'>Send</button>
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
    <div className='info'>
      <span className='date'>Posted {date}</span>
      <span className='name'>{name}</span>
      <div className='image'>{image}</div>
    </div>
  );
};

export default Topic;
