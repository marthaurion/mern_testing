const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    published_date: {
        type: Date,
        required: true,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Post