import carrito from '../assets/carrito-de-compras.png'
import UserCircle from '/account_circle_30dp_F4F4F4_FILL0_wght400_GRAD0_opsz24.png'
import '../styles/components/nav.css'

const Navbar = ()=>{
    return(
        <nav>
            <button className='hidden'><img src="/menu_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.png" alt="menu" /></button>
            <div className='Title'><h1>Carrito Express</h1><img src={carrito} alt="carrito" /></div>
            <ul>
                <li><a href="/">inicio</a></li>
                <li><a href="/categorias">categorias</a></li>
                <li><a href="/contacto">contacto</a></li>
            </ul>
            <div className='UserItem'>
                <a href="/carrito"><button><img id='carrito' src="/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="carrito.png" /></button></a>
            </div>
        </nav>
    )
}

export default Navbar