import logoImage from '../assets/logo-image.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <a href="about" className="logo">
                <img src={logoImage} alt="Borcelle Hotel" />
            </a>

            <nav className="nav">
                <Link to="/about">About</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <button className="book-button">Book a room</button>
        </header>
    )
}

export default Header
