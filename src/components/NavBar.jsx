import carrito from '../assets/carrito-de-compras.png'
import UserCircle from '/account_circle_30dp_F4F4F4_FILL0_wght400_GRAD0_opsz24.png'
import '../styles/components/nav.css'

const Navbar = ()=>{
    return(
        <nav>
            <div className='Title'><h1>Carrito Express</h1><img src={carrito} alt="carrito" /></div>
            <ul>
                <li><a href="/">inicio</a></li>
                <li><a href="/categorias">categorias</a></li>
                <li><a href="/contacto">contacto</a></li>
            </ul>
            <div className='UserItem'>
              <a href="/user"><button><img src={UserCircle} alt="userIcon" />Cuenta</button></a>
            </div>
        </nav>
    )
}

export default Navbar