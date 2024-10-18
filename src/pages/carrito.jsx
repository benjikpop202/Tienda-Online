import {useState, useEffect} from 'react'
import Card from '../components/Cards';

const CarritoSection = ()=>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener todos los productos
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productos");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();

        // Filtrar productos cuyo atributo 'carrito' sea true
        const productosEnCarrito = data.filter(product => product.carrito === true);
        setProducts(productosEnCarrito);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);  // Solo se ejecuta una vez al montar

  if (loading) return <p>Cargando carrito...</p>;
  if (error) return <p>{error}</p>;
  if (products.length === 0) return <p>No hay productos en el carrito</p>;

    return(
        <div className="ProductsContainer">
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
    )
}

export default CarritoSection