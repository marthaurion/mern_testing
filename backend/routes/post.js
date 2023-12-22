const express = require('express');
const router = express.Router();

// Load Post model
const Post = require('../models/post');

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
  });

// @route POST api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Post.create(req.body)
      .then(post => res.json({ msg: 'Post added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this post' }));
  });

// @route POST api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
      .then(post => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

// @route DELETE api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id, req.body)
      .then(post => res.json({ mgs: 'Post entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a post' }));
  });
  
  module.exports = router;