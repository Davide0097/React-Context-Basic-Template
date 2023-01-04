import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

// Create a hook for consuming the context
const useBlogPosts = () => {
  const posts = useContext(PostContext);
  return posts;
};
export default useBlogPosts