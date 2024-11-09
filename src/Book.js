const Book = (props) => {
    const {
        image,
        title,
        autor,
        number } = props; //<img src={props.image} alt={props.title} /> Reusage props is reduce while using this code 
    console.log(number);
    return (
            <article className='book'>
                <img src={image} alt={title} /> 
                <h2>{title}</h2>
                <h4>{autor.toUpperCase()}</h4>
                <span className="number">{`# ${number + 1}`}</span>
            </article>
    );
};
export default Book;