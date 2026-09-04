import breakfastSpace from '../assets/beach.jpg'

function Breakfast() {
    return (
        <section className="breakfast">
            <div className="breakfast-content">
                <h2>Free Breakfast, It's All You Can Eat!</h2>
                <p>Start your morning with a delicious breakfast, 
                    featuring a wide selection of fresh and tasty options. 
                    Enjoy as much as you like, completely free with your stay.
                </p>
                <button className='learnMore'>Learn more</button>
            </div>
            <img 
                className="breakfast-image"
                src={breakfastSpace}
                alt="Breakfast Space" />
        </section>
    )
}

export default Breakfast