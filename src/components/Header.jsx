import logoImage from '../assets/logo-image.png'

function Header() {
    return (
        <header className="header">
            <a href="about" className="logo">
                <img src={logoImage} alt="Borcelle Hotel" />
            </a>

            <nav className="nav">
                <a href="#about">About</a>
                <a href="#rooms">Rooms</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>

            <button className="book-button">Book a room</button>
        </header>
    )
}

export default Header
