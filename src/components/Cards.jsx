import '../styles/components/card.css'
const Card = ({image, title, descripcion, precio})=>{
   return(
    <div className='card'>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{descripcion}</p>
        <h2>{precio}</h2>
    </div>
   )
}

export default Card