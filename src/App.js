// Pages
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

// Navigation bar
import Navbar from './components/Navbar';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/BlogPage' element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
