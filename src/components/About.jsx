import AboutCard from './AboutCard'
import highQuality from "../assets/high-quality.png";

function About() {
    return (
        <section id='about' className="about">
            <h1>Nice Bedroom, More Sweet Dreams</h1>

            <div className="about-cards">

                <AboutCard
                icon={highQuality}
                title="Luxury Rooms"
                text="Elegant rooms designed for comfort, relaxation and a peaceful stay."
                />

                <AboutCard
                icon={highQuality}
                title="Fine Dining"
                text="Enjoy carefully prepared dishes and a memorable dining experience."
                />

                <AboutCard
                icon={highQuality}
                title="Perfect Location"
                text="Stay close to the city while enjoying a calm and comfortable atmosphere."
                />
                
            </div>
        </section>
    )
}

export default About