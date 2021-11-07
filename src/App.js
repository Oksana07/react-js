import React, {useState} from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';

import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
const [posts, setPosts]=useState([
  {id: 1, title: 'Javascript', body: 'Javascript'},
  {id: 2, title: 'Javascript 2', body: 'Javascript'},
  {id: 3, title: 'Javascript 3', body: 'Javascript'},
])

  return (
    <div className="App">
    <PostList posts={posts} title='Список для JS'/>
  
  </div>
  );
}

export default App;
