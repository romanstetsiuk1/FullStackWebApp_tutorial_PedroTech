import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect (() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      // console.log(response);
      // console.log(response.data);     // .data - zaweza odpowiedz
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Lista postów</h1>
      {listOfPosts.map(( value, key ) => { 
        return <div className='post'> 
          <div className='title'>{value.title}</div>
          <div className='body'>{value.postText}</div>
          <div className='footer'>{value.userName}</div>
        </div>; 
      })}
    </div>
  );
}

export default App;
