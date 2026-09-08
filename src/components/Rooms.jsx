import roomsSpace from '../assets/rooms.jpg'
import { Link } from 'react-router-dom'

function Rooms() {
    return (
        <section id='rooms' className="rooms">
            <img 
                className="rooms-image"
                src={roomsSpace}
                alt="Rooms Space" />

            <div className="rooms-content">
                <h2>Our Rooms, Where Comfort Meets Style</h2>
                <p>Experience refined comfort in beautifully designed
                   rooms made for slowing down and enjoying the moment.
                   From soft textures to carefully chosen details, 
                   every space is created to make your stay feel special.
                </p>
                <Link to='/learnMore' className='learnMore'>Learn more</Link>
            </div>

        </section>
    )
}

export default Rooms