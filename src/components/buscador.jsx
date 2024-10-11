import '../styles/components/buscador.css'
import { useState } from 'react';
const Buscador = ()=>{
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const handleMinChange = (e) => setMin(e.target.value);
    const handleMaxChange = (e) => setMax(e.target.value);

    return(
        <>
         <div className="buscador">
          <div className="title">
          <img src="/search_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="buscador" /> <span>Busque lo que Necesites</span>
          </div>
        <form className='formulario' action="" method="get">
            <select className='form' name="categoria" id="categoria">
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
    
        </>
    )
}

export default Buscador