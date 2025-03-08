import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {
    
    const [ListOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    },[]);

  return (
    <div className="App">
      {ListOfPosts.map((value,key) => {
        return (
        <div className='post'>
            <div className='title'>{value.title}</div>
            <div className='postText'>{value.postText}</div>
            <div className='userName'>{value.userName}</div>
        </div>);
        })}
    </div>
  );
}

export default Home