// src/components/PostComments/index.tsx
import React, { useState } from 'react';
import Comment from '../../models/Comment';

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    const newComment = new Comment(comments.length + 1, commentText);
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button data-testid="add-comment" onClick={addComment}>Add Comment</button>
      <ul data-testid="comment-list">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
