import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CommentSection() {
  const { id } = useParams(); // id posta
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania komentarzy:", err);
      });
  }, [id]);

  const addComment = () => {
    if (!newComment.trim()) return;

    axios.post("http://localhost:3001/comments", {
      commentBody: newComment,
      PostId: id,
    })
      .then((res) => {
        setComments([...comments, res.data]); // dodajemy nowy komentarz do listy
        setNewComment(''); // czyścimy input
      })
      .catch((err) => {
        console.error("Błąd dodawania komentarza:", err);
      });
  };

  return (
    <div className='commentSection'>
      <h3>Komentarze</h3>
      
      <div className='addComment'>
        <input
          type='text'
          placeholder='Napisz komentarz...'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Dodaj komentarz</button>
      </div>

      <div className='listOfComments'>
        {comments.length === 0 ? (
          <p>Brak komentarzy.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className='comment'>
              {comment.commentBody}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CommentSection;
