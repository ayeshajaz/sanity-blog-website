"use client"
import React, { useState, useEffect } from 'react';

const CommentSec = () => {
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setName('');
      setComment('');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-gray-500 px-4 py-2 border border-gray-300 rounded hover:bg-white"
        >
          Post Comment
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">All Comments</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((item, index) => (
              <li key={index} className="mb-3 border-b pb-2">
                <p className="font-semibold">{item.name}</p>
                <p>{item.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSec;
