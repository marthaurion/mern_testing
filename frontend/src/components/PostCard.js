import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PostCard = (props) => {
  const post = props.post;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-post/${post._id}`}>{post.title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default PostCard;