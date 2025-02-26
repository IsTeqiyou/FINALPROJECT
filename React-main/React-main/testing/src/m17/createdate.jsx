import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId] = useState(1); // Static value, but bisa dinamis

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Post Created:', data);
        alert('Post Created Successfully!');
      } else {
        alert('Error creating post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating post');
    }
  };

  return (  
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
