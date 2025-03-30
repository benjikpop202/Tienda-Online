import { useState, useEffect } from "react";
import "../styles/components/editForm.css";

const FormEdit = ({ editingProduct, setProducts, products, closeForm }) => {
  const [formData, setFormData] = useState(editingProduct);

  useEffect(() => {
    setFormData(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      // Actualizar localmente
      setProducts(
        products.map((product) =>
          product._id === formData._id ? formData : product
        )
      );

      // Llamada PUT al backend
      const response = await fetch(`/api/productos/${formData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al actualizar el producto");

      closeForm(); // Cerrar el formulario
    } catch (error) {
      console.error("Error actualizando el producto:", error);
    }
  };

  if (!formData) return null;

  return (
    <div className="CardEdit">
      <h2>Editar Producto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Precio:
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} />
        </label>
        <br />
        <label>
          Categoría:
          <select name="categoria" value={formData.categoria} onChange={handleChange}>
            <option value="moda">Moda</option>
            <option value="tecnologia">Tecnología</option>
            <option value="hogar">Hogar</option>
            <option value="electrodomésticos">Electrodomésticos</option>
            <option value="vehículos">Vehículos</option>
          </select>
        </label>
        <br />
        <label>
          Descripción:
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Guardar
        </button>
        <button type="button" onClick={closeForm}>
          Cerrar
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
