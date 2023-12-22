import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ShowAllPosts from './components/ShowAllPosts';
import CreatePost from './components/CreatePost';
import ShowPostDetails from './components/ShowPostDetails';
import UpdatePostInfo from './components/UpdatePostInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowAllPosts />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/show-post/:id' element={<ShowPostDetails />} />
          <Route path='/edit-post/:id' element={<UpdatePostInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;