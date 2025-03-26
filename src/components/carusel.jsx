// Carousel.jsx
import { useState } from 'react';
import '../styles/components/Carucel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let [posicion, setPosicion] = useState(1)

    const cloudinaryUrl = (publicId) => 
        `https://res.cloudinary.com/dsd3aqbqf/image/upload/${publicId}.jpg`;


    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((publicId, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={cloudinaryUrl(publicId)} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
              {images.length > 1 &&(
               <>
               <button className="carousel-btn prev" onClick={prevSlide}>
              <img className='Arrow' src="/arrow_back_ios_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="prev" />
              </button>
               <button className="carousel-btn next" onClick={nextSlide}>
              <img className='Arrow' src="/arrow_forward_ios_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="next" />
             </button>
               </>  
              )}
            
        </div>
    );
};

export default Carousel;
