import '../styles/user.css'
const UserSection = ()=>{
   return(
    <>
    <div className="UserContenedor">
        <aside>
            <div className="head"><img src="/account_circle_30dp_F4F4F4_FILL0_wght400_GRAD0_opsz24.png" alt="user.png" />
              <h1>User Name</h1>
            </div>
            <div className="Options">
                <button><img id='carrito' src="/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="carrito.png" />Carrito</button>
            </div>
        </aside>
        <section>Vistas de usuario</section>
    </div>
    </>
   )
}

export default UserSection