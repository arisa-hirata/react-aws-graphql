import React, { useState } from 'react';
import { connect } from 'react-redux';
import OneColumn from './OneColumn';

const CreateTopic = ({ user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  const onInputChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'description') {
      setDescription(e.target.value);
    } else if (e.target.id === 'tag') {
      setTags(e.target.value);
    }
  };

  const createTopic = () => {
    let tagArray = tags
      .split(',')
      .map(tag => tag.trim(' '))
      .filter(tag => tag.length);
    let topic = {
      title,
      description,
      tags: tagArray,
      userId: user.id,
      username: user.username,
      postedDate: '',
      image: null
    };
  };

  return (
    <OneColumn title="Ask Question">
      <div className="ui form textarea">
        <div className="field">
          <label>Title</label>
          <input
            id="title"
            placeholder="Type title here..."
            value={title}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            id="description"
            placeholder="Write your description here..."
            value={description}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Tag</label>
          <textarea
            id="tag"
            placeholder="Ex. dog, food, birthday"
            value={tags}
            onChange={onInputChange}
          />
        </div>
        <button className="add-image">+ Add Image</button>
        <button onClick={createTopic} className="positive btn ui button center">
          Create
        </button>
      </div>
    </OneColumn>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(CreateTopic);
