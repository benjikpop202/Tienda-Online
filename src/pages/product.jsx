import ProductCard from '../components/ProductCard'
import '../styles/product.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductSection = ()=>{
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const response = await fetch(`/api/productos/${id}`);
                if (!response.ok) {
                  throw new Error("Error al obtener los productos");
                }
                const data = await response.json();
                setProduct(data);  
              } catch (err) {
                setError(err.message); 
              } finally {
                setLoading(false);  
              }
        }
        getProduct();
    }, [])
    if (loading) return <p id='loading'>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    return(
        <div className="ProductContainer">
         <ProductCard
          imagen={'/assets/products/Jacket man.jpeg'} 
          nombre={product.nombre}
          categoria={product.categoria}
          descripcion={product.descripcion}
          precio={product.precio}
          stock={product.stock}
          />
        </div>
    )
}

export default ProductSection
