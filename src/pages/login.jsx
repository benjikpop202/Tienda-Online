
const Login = ()=>{
    return(
        <form className="AuthForm">
           <h1>Logueate en tu cuenta</h1>
           <input className="AuthInput" type="email" placeholder="Correo electronico"/>
           <input className="AuthInput" type="password" placeholder="Contraseña"/>
           <button className="AuthSubmit" type="submit">Log in</button>
           <p>Nuevo en carrito express? <a href="/register">Registrarse</a></p>
        </form>
    )
}

export default Login