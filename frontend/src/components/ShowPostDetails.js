import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowPostDetails(props) {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPostDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/posts/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error from ShowPostDetails_deleteClick');
      });
  };

  const PostItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{post.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Published Date</td>
            <td>{post.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Content</td>
            <td>{post.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Post List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Post's Record</h1>
            <p className='lead text-center'>View Post's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{PostItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(post._id);
              }}
            >
              Delete Post
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-post/${post._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPostDetails;