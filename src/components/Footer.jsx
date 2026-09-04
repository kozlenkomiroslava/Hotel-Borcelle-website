import logo from '../assets/borcelle-logo.png'

function Footer() {
    return(
        <footer>

            <div className="footer-info">

                <div className="hotel-info">
                    <h3>Borcelle Hotel</h3>
                    <p>At Borcelle Hotel, we believe a great stay 
                        is about more than just a room. It is about 
                        comfort, thoughtful details, and a welcoming 
                        atmosphere that makes you feel at home from 
                        the moment you arrive.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Explore</h3>
                    <a href="#about">About</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#leisure">Leisure</a>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <a href="tel:+380000000000">+38 000 000 00 00</a>
                    <a href="mailto:borcelle@gmail.com?subject=Room Booking">
                       borcelle@gmail.com
                    </a>                    
                    <a href="https://www.google.com/maps/search/?api=1&query=Vinnytsia,Ukraine"
                       target="_blank"
                       rel="noopener noreferrer">Vinnytsia, Ukraine
                    </a>                
                </div>

                <div className="footer-bottom">
                    <img src={logo} alt="Borcelle Hotel" />
                    <p>© 2026 Borcelle Hotel</p>
                    <a href="#">Privacy Policy</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer