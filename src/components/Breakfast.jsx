import breakfastSpace from '../assets/beach.jpg'
import { Link } from 'react-router-dom'

function Breakfast() {
    return (
        <section className="breakfast">
            <div className="breakfast-content">
                <h2>Free Breakfast, It's All You Can Eat!</h2>
                <p>Start your morning with a delicious breakfast, 
                    featuring a wide selection of fresh and tasty options. 
                    Enjoy as much as you like, completely free with your stay.
                </p>
                <Link to='/learnMore' className='learnMore'>Learn more</Link>
            </div>
            <img 
                className="breakfast-image"
                src={breakfastSpace}
                alt="Breakfast Space" />
        </section>
    )
}

export default Breakfast