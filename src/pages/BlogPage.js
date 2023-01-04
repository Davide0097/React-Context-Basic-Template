import useBlogPosts from '../hooks/usePostContext';

const BlogPage = () => {

  const posts = useBlogPosts();

  return (
    <div className='BlogPage'>
      <h1>Hello from BlogPage</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage