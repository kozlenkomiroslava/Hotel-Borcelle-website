function AboutCard({icon, title, text}) {
    return (
        <div className="about-card">
            <img src={icon} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default AboutCard
