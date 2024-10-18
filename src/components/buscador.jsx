import '../styles/components/buscador.css';
import { useState } from 'react';

const Buscador = ({ setProductosFiltrados }) => {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleMinChange = (e) => setMin(e.target.value);
    const handleMaxChange = (e) => setMax(e.target.value);
    const handleCategoriaChange = (e) => setCategoria(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario

        // Aquí puedes hacer la solicitud a tu backend
        try {
            const response = await fetch(`/api/productos?categoria=${categoria}&precioMin=${min}&precioMax=${max}`);
            const data = await response.json();

            // Actualiza el estado de productos filtrados en el componente padre
            setProductosFiltrados(data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    return (
        <div className="buscador">
            <div className="title">
                <img src="/search_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="buscador" />
                <span>Busque lo que Necesites</span>
            </div>
            <form className='formulario' onSubmit={handleSubmit}>
                <select className='form' name="categoria" id="categoria" onChange={handleCategoriaChange}>
                    <option value="">Categorias</option>
                    <option value="Moda">Moda</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Electrodomesticos">Electrodomesticos</option>
                    <option value="Vehiculos">Vehiculos</option>
                </select>
                <input
                    className='form'
                    type="number"
                    name="min"
                    placeholder="$Precio minimo"
                    value={min}
                    onChange={handleMinChange}
                />
                <input
                    className='form'
                    type="number"
                    name="max"
                    placeholder="$Precio maximo"
                    value={max}
                    onChange={handleMaxChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default Buscador;
