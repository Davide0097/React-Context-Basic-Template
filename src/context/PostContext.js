import React, { createContext } from 'react';

// Create the context
export const PostContext = createContext();

// Create a provider for the context
export const PostProvider = ({ children, posts }) => {
  return (
    <PostContext.Provider value={posts}>
      {children}
    </PostContext.Provider>
  );
};

