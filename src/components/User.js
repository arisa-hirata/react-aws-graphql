import React from 'react';
import TopicBoxContent from './TopicBoxContent';
import TopicContainerWithComment from './TopicContainerWithComment';

const User = ({ image }) => {
  return (
    <div className="user-page">
      <div className="user-page-img-container">
        <img
          src={image ? image : require('../img/defaultIcon.svg')}
          className="defaultImg"
        />
      </div>
      <h2>User Name</h2>
      <TopicContainerWithComment
        numberOfComent={5}
        content={
          <TopicBoxContent
            body={header('question')}
            tags={['dog', 'cat', 'mouse']}
            info={info('May 25, 2019 23:43')}
            icon={icon(1)}
          />
        }
      />
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

export default User;
