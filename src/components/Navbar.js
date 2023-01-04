import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='Navbar'>
            <Link to="/">
                <h1>Home (page1) </h1>
            </Link>
            <Link to="/BlogPage">
                <h1>BlogPage  (page2) </h1>
            </Link>

        </nav>
    )
}

export default Navbar