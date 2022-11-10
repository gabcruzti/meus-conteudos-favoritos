function Cards (props) {
    return(
        <div className="cards">
            <div>
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
            <img className="image-cards" src={props.link}/>
            </div>
            
        </div>
    )
}

export default Cards