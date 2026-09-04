import hotelImage from '../assets/hotel-img.png'

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <p className="hero-subtitle">WELCOME TO</p>
                <h2>BORCELLE</h2>

                <p className="hero-text">
                A beautiful place to relax, enjoy and feel at home.
                </p>

                <button className="hero-button">
                Discover rooms
                </button>
            </div>

            <img 
                className="hero-image"
                src={hotelImage}
                alt="Grand Hotel"
            />

        </section>
    )
}

export default Hero