import '../styles/components/card.css'
import { useNavigate } from 'react-router-dom';
const Card = ({id,image, title, descripcion, precio})=>{

  const cloudinaryUrl = (publicId) => 
    `https://res.cloudinary.com/dsd3aqbqf/image/upload/${publicId}.jpg`;

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

   return(
    <div className='card' onClick={handleClick}>
        <img src={cloudinaryUrl(image)} alt={title} />
        <h1>{title}</h1>
        <p>{descripcion}</p>
        <h2>${precio}</h2>
    </div>
   )
}

export default Card