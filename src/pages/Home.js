import useBlogPosts from '../hooks/usePostContext';


const Home = () => {
  const posts = useBlogPosts();
  return (
    <div className='Home'>
      <h1>Hello from Home page</h1><ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home