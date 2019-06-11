import React, { useState } from 'react';
import { connect } from 'react-redux';
import OneColumn from './OneColumn';

const CreateTopic = ({ user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState('');
  const imageRef = React.createRef();

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

  const readURL = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let name = e.target.files[0].name;

      reader.onload = function(e) {
        imageRef.current.src = e.target.result;
        setImage(name);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const deleteFile = () => {
    imageRef.current.src = '';
    setImage('');
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
        <div className="file-input">
          <label className="file-upload">
            <input type="file" onChange={readURL} />
            <div>+ Add Image</div>
          </label>
          {image ? (
            <span className="file-name">
              <i onClick={deleteFile} className="times circle icon" />
              {image}
            </span>
          ) : null}
        </div>
        <div className="topic-image-container">
          <img className="topic-image" ref={imageRef} src="" alt="" />
        </div>
        <button onClick={createTopic} className="btn ui button center">
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
