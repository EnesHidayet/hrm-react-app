import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import axios from 'axios';

function CommentSection() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.post('http://localhost:8081/hrm/user/find-all-comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <section>
      <div className="container my-5 py-5 text-body">
        <div className="row d-flex justify-content-center">
          <div style={{ width: '80%', minWidth: '600px', overflowY: 'auto', overflowX: 'hidden', maxHeight: '450px' }}>
            {comments.length > 0 && (
              comments.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  avatarSrc={comment.avatarSrc}
                  time={new Date(comment.time).toLocaleString()}
                  content={comment.content}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
