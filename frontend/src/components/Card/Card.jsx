import './Card.css'

export default function Card(props){
    return(
        <article className='cardArticle'>
            <img src={`${props.src}`} alt={`${props.alt}`} />
            <h1>{`${props.title}`}</h1>
            <p>{`${props.description}`}</p>
        </article>
    )
}