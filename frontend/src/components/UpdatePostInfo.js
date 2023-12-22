import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import * as moment from 'moment';

function UpdatePostInfo(props) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    published_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/posts/${id}`)
      .then((res) => {
        const formattedDate = moment.utc(res.data.published_date).format('YYYY-MM-DD'); // use .utc to make sure it converts properly
        setPost({
          title: res.data.title,
          content: res.data.content,
          published_date: formattedDate,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatePostInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: post.title,
      content: post.content,
      published_date: post.published_date,
    };

    axios
      .put(`http://localhost:8082/posts/${id}`, data)
      .then((res) => {
        navigate(`/show-post/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatePostInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Post List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Post</h1>
            <p className='lead text-center'>Update Post's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={post.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <input
                type='date'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={post.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <textarea
                type='text'
                placeholder='Description of the Book'
                name='content'
                className='form-control'
                value={post.content}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePostInfo;