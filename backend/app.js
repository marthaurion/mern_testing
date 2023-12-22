const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const posts = require('./routes/post');

const app = express();

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// init middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

// use routes
app.use('/posts', posts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));