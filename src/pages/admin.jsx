import '../styles/admin.css'
import { useState } from 'react';
const AdminSection = ()=>{
  const [products, setUsers] = useState([
    { id: 1, nombre: 'iphone10', categoria: 'tecnologia', descricpion:'iphoneX 2017', precio:1200, stock: 2 },
    { id: 2, nombre: 'renault fluence', categoria: 'vehiculos', descricpion:'renault fluence modelo 2020', precio:1200000, stock: 3 },
    { id: 3, nombre: 'iphone13', categoria: 'tecnologia', descricpion:'iphone13 2024', precio:1300, stock: 1 },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };


  return (
    <>
    {isFormVisible && (
      <div className="overlay">
        <div className="form-container">
          <h2>Añadir Producto</h2>
          <form method='post'>
              <input className='input' type="text" placeholder='ingrese Nombre '/>
              <select className='input' name="categorias" id="categoria">
                <option value="">ingrese categoria</option>
                <option value="moda">Moda</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="hogar">Hogar</option>
                <option value="electrodomesticos">Electrodomesticos</option>
                <option value="vehiculos">Vehiculos</option>
              </select>
              <input className='input' type="text" placeholder='ingrese descripcion'/>
              <input className='input' type="text" placeholder='ingrese precio'/>
              <input className='input' type="text" placeholder='ingrese stock'/>

            <button type="submit">Agregar</button>
          
          </form>
          <button id='cerrar' onClick={toggleForm}>Cerrar</button>
        </div>
      </div>
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
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.categoria}</td>
              <td>{product.descricpion}</td>
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