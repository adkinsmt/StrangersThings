import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';



// not sure if the below portion is needed
function App() {
  return (
    <>
      <div>
        <div id="container">
          <Link to="/home">Home</Link>
          <Link to="/post">Post</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/post" element={<h1>Post</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const token = 'TOKEN_STRING_HERE';
    const apiUrl = 'https://strangers-things.herokuapp.com/api/${COHORT_NAME}';

    // Data objects, the form fields
    const postBody = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };

    try {
      // POST request to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({ post: postBody }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('New post created:', responseData);
      } else {
        console.error('Error creating post:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }


export default NewPostForm;
