import '../styles/components/ProductCard.css'
const ProductCard = ({imagen, nombre, categoria, precio, descripcion, stock})=>{
    return(
        <div className="cardContainer">
            <section>
                <img src={imagen} alt="ProductImg" />
            </section>
            <aside>
                <h1 id='nombre'>{nombre}</h1>
                <span id='categoriaCard'>{categoria}</span>
                <h1 id='precio'>${precio}</h1>
                <p id='descripcion'>{descripcion}</p>
                <h2 id='stock'>Disponibles: {stock}</h2>
                <div className="buttonSection">
                <button id='carro'>Agregar <img className='icono' src="/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="carro" /></button>
                <button id='comprar'>Comprar <img className='icono' src="/local_mall_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="cartera" /></button>
                </div>
            </aside>
        </div>
    )
}

export default ProductCard