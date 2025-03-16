import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Home() {
    
    const [ListOfPosts, setListOfPosts] = useState([]);

    const navigate  = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    },[]);

  return (
    <div className="App">
      {ListOfPosts.map((value,key) => {
        return (
        <div key={key} className='post' onClick={ () => {
          {navigate(`/post/${value.id}`);
        }
        } }>
            <div className='title'>{value.title}</div>
            <div className='postText'>{value.postText}</div>
            <div className='userName'>{value.userName}</div>
        </div>);
        })}
    </div>
  );
}

export default Home