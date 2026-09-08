import poolImage from '../assets/pool.jpg'
import { Link } from 'react-router-dom'

function Pool() {
    return(
        <section id='leisure' className="pool">
            <div className="pool-content">
                <h2>Pool & Leisure</h2>
                <p>Take a break from the everyday and enjoy our spacious 
                    pool area. Surrounded by comfortable spaces to relax, 
                    swim, and soak up the atmosphere, it is the perfect 
                    place to spend a quiet afternoon or enjoy time with 
                    friends and family.</p>
                <Link to='/learnMore' className='learnMore'>Discover the Pool Area</Link>
            </div>
            <img 
            className="pool-image"
            src={poolImage}
            alt="Pool Area" />
        </section>
    )
}

export default Pool