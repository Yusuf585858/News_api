function DataElement(props) {
    return (
        <div>
            <img src={props.urlToImage} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.publishedAt}</p>
            <a href={props.url}>Read more</a>
        </div>
    );
}

export default DataElement;