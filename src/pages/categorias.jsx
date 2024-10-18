import '../styles/categorias.css'
import Card from '../components/Cards'
import { useState, useEffect } from 'react';
const Categorias = ()=>{
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
        setProducts(data); // Guarda los productos en el estado
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const modaProducts = products.filter(product => product.categoria === 'moda');
  const tecnologiaProducts = products.filter(product => product.categoria === 'tecnologia');
  const hogarProducts = products.filter(product => product.categoria === 'hogar');
  const electroProducts = products.filter(product => product.categoria === 'electrodomesticos' )
  const vehiculosProducts = products.filter(product => product.categoria === 'vehiculos')
    return(
        <div className="CategoriasContainer">
            {modaProducts.length > 0 && 
              <>
              <label htmlFor="moda">Moda</label>
               <div id="moda" className="Raw">
               {modaProducts.map((product)=> (
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
              </>
            }
            
            {tecnologiaProducts.length > 0 && 
              <>
              <label htmlFor="tecno">Tecnologia</label>
               <div id="tecno" className="Raw">
                {tecnologiaProducts.map((product)=>(
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
              </>
            }

            {hogarProducts.length > 0 && 
              <>
              <label htmlFor="hogar">Hogar</label>
               <div id="hogar" className="Raw">
                {hogarProducts.map((product)=>(
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
              </>
            }

            {electroProducts.length > 0 && 
              <>
              <label htmlFor="electro">Electrodomesticos</label>
               <div id="electro" className="Raw">
                {electroProducts.map((product)=>(
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
              </>
            }

            {vehiculosProducts.length > 0 && 
              <>
              <label htmlFor="vehiculo">Vehiculos</label>
               <div id="vehiculo" className="Raw">
                {vehiculosProducts.map((product)=>(
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
              </>
            }
        </div>
    )
}

export default Categorias