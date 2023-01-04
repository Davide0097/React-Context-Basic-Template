import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// context provider
import { PostProvider } from './context/PostContext';

// JSON FILE
import posts from './dataAPI.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostProvider posts={posts}>
      <App />
    </PostProvider>
  </React.StrictMode>
);

