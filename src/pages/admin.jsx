import '../styles/admin.css'
import { useState, useEffect } from 'react';
import Form from '../components/form';

const AdminSection = ()=>{
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [editingProduct, setEditingProduct] = useState(null);
 const [isFormVisible, setIsFormVisible] = useState(false);

 const handleEditClick = (product) => {
  setEditingProduct(product);
};
// Función para manejar el cambio en los inputs del formulario
const handleChange = (e) => {
  const { name, value } = e.target;
  setEditingProduct({ ...editingProduct, [name]: value });
};
// Función para guardar los cambios del producto editado
const handleSave = async () => {
  try {
    // Actualizar localmente
    setProducts(products.map(product => 
      product._id === editingProduct._id ? editingProduct : product
    ));

    // Llamada PUT al backend para actualizar en la base de datos
    const response = await fetch(`/api/productos/${editingProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingProduct),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el producto');
    }
    
    setEditingProduct(null); // Cerrar el formulario
  } catch (error) {
    console.error("Error actualizando el producto:", error);
  }
};
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  const handleDelete = async (productId, button)=>{
    try {
      const response = await fetch(`/api/productos/${productId}`, {
        method: 'DELETE',
      })
      if(response.ok){
        alert('producto eliminado exitosamente')
        let NewProducts = products.filter((producto)=> producto._id !== productId)
        setProducts(NewProducts)
      }else{
        alert('error al eliminar el producto:', response.status)
      }
    } catch (error) {
      console.log('error de la peticion', error)
    }
  }
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
            <th>eliminar</th>
            <th>editar</th>
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
              <td><button id='delete' onClick={() => handleDelete(product._id, this)}><img src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="delete" /></button></td>
              <td><button id='edit' onClick={()=> handleEditClick(product)}><img src="/edit_note_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="edit" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      {editingProduct && (
        <div className="Overlay2">
            <div className='CardEdit'>
        <h2>Editar Producto</h2>
        <form>
          <label>
            Nombre:
            <input 
              type="text" 
              name="nombre" 
              value={editingProduct.nombre} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            Precio:
            <input 
              type="number" 
              name="precio" 
              value={editingProduct.precio} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            Categoría:
            <select 
              name="categoria" 
              value={editingProduct.categoria} 
              onChange={handleChange}
            >
              <option value="Moda">Moda</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Hogar">Hogar</option>
              <option value="Electrodomésticos">Electrodomésticos</option>
              <option value="Vehículos">Vehículos</option>
            </select>
          </label>
          <br />
          <label>
            Descripción:
            <textarea 
              name="descripcion" 
              value={editingProduct.descripcion} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            Stock:
            <input 
              type="number" 
              name="stock" 
              value={editingProduct.stock} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <button type="button" onClick={handleSave}>Guardar</button>
        </form>
      </div>
        </div>
      
      )}
    </div>
    </>
    
  );
    
}

export default AdminSection