import React from 'react';
import './App.css'; // Import pliku CSS
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import CreatePost from './pages/CreatePost.js';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/" >
                Home
            </Link>
            <Link to="/createPost" >
                Create A Post
            </Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/createPost' element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;