import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

function ShowAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowAllPosts');
      });
  }, []);

  const postList =
    posts.length === 0
      ? 'No posts found.'
      : posts.map((post, k) => <PostCard post={post} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Posts List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-post'
              className='btn btn-outline-warning float-right'
            >
              + Add New Post
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{postList}</div>
      </div>
    </div>
  );
}

export default ShowAllPosts;