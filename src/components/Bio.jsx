function Bio (props) {
    return(
        <div className="bio">
            <h2>{props.subtitle}</h2>
            <p>{props.text}</p>
            <img className="image-bio" src={props.link}/>         
        </div>
    )
}

export default Bio
