import '../styles/home.css'
import Card from '../components/Cards'
import Buscador from '../components/buscador'
import { useState, useEffect } from "react";

const Home = ()=>{

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productos");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);  // Guarda los productos en el estado
      } catch (err) {
        setError(err.message);  // Maneja errores
      } finally {
        setLoading(false);  // Termina la carga
      }
    };

    fetchProducts();  // Llama a la función al montar el componente
  }, []);  // Solo se ejecuta una vez al montar

  if (loading) return <p id='loading'>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

    return(
        <div className="home-container">
          <div className="head">
          <Buscador/>
          <h1>Resultados de Productos</h1>
          </div>
          <div className='ProductsContainer'>
          {products.map((product) => (
          <Card
          key={product._id}
          id={product._id}
          image={product.imagenes[0]}
          title={product.nombre}
          descripcion={product.descripcion}
          precio={product.precio}
          />
         ))}
            
          </div>
        </div>
    )
}

export default Home 