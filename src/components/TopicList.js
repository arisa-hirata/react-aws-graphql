import React from 'react';
import TopicBoxContent from './TopicBoxContent';
import TopicContainerWithComment from './TopicContainerWithComment';

const TopicList = ({ title, topics }) => {
  return (
    <div className='topic-list'>
      <h2>{title}</h2>
      <TopicContainerWithComment
        numberOfComent={5}
        content={
          <TopicBoxContent
            body={header('question')}
            tags={['dog', 'cat', 'mouse']}
            info={info('May 25, 2019 23:43', 'User name')}
          />
        }
      />
      <TopicContainerWithComment
        numberOfComent={5}
        content={
          <TopicBoxContent
            body={header('question')}
            tags={['dog', 'cat', 'mouse']}
            info={info('May 27, 2019 23:43', 'User name')}
          />
        }
      />
      <TopicContainerWithComment
        numberOfComent={5}
        content={
          <TopicBoxContent
            body={header('question')}
            tags={['dog', 'cat', 'mouse']}
            info={info('Jun 1, 2019 23:43', 'User name')}
          />
        }
      />
    </div>
  );
};

const header = question => {
  return <h3>{question}</h3>;
};

const info = (date, name, image = null) => {
  return (
    <div className='info'>
      <span className='date'>Posted {date}</span>
      <span className='name'>{name}</span>
      {image ? <div className='image'>{image}</div> : null}
    </div>
  );
};

export default TopicList;
