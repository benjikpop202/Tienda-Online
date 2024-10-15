import '../styles/admin.css'
import { useState, useEffect } from 'react';
import Form from '../components/form';
const AdminSection = ()=>{
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
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

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    {isFormVisible && (
      <Form toggleFunction={toggleForm} />
    )}
   <div className='AdminContainer'>
      <aside>
        <h2>Admin</h2>
        <button id='add' onClick={toggleForm}><img src="/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="add" />Agregar Producto</button>
      </aside>
      <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.nombre}</td>
              <td>{product.categoria}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
  
    </div>
    </>
    
  );
    
}

export default AdminSection