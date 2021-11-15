import React, {useRef, useState} from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
const [posts, setPosts]=useState([
  {id: 1, title: 'Javascript', body: 'Javascript'},
  {id: 2, title: 'Javascript 2', body: 'Javascript'},
  {id: 3, title: 'Javascript 3', body: 'Javascript'},
])

const [post, setPost] = useState ({title: '', body: ''})

const addNewPost = (e)=>{
  e.preventDefault()
 
 setPosts([...posts, {...post, id: Date.now()}])
setPost({title: '', body: ''})
}

  return (
    <div className="App">
    <form>
      <MyInput
      // управляємый компонент
      value = {post.title} 
      onChange = {e => setPost({...post, title: e.target.value})}
      type="text" 
      placeholder= "Назва поста"/>
     <MyInput 
       value = {post.body} 
       onChange = {e => setPost({...post, body: e.target.value})}
      type="text" 
      placeholder= "Назва поста"/>      
      <MyButton onClick = {addNewPost}>Створити пост</MyButton>
    </form>
    <PostList posts={posts} title='Список для JS'/>  
  </div>
  );
}

export default App;
