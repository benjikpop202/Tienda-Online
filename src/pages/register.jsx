import '../styles/register.css'
const Register = ()=>{
   return(
        <form className='AuthForm'>
           <h1>Crea tu cuenta</h1> 
           <input className='AuthInput' type="text" placeholder="nombre"/>
           <input className='AuthInput' type="email" placeholder="correo electronico"/>
           <input className='AuthInput' type="password" placeholder="contraseña" />
           <button className='AuthSubmit' type="submit">Empezar Ahora</button>
           <p>Ya tienes una cuenta? <a href="/login">Log in</a></p>
        </form>
   )
}

export default Register